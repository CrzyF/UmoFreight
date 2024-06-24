import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Camera, CameraType } from 'expo-camera/legacy';
import * as Location from 'expo-location';
import axios from 'axios';
import * as MediaLibrary from 'expo-media-library';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

const LiveStream = ({ navigation }) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationAddress, setLocationAddress] = useState('');
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [permission, requestPermission ] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      if (status === 'granted') {
        setIsCameraReady(true);
      } else {
        Alert.alert('Permission Denied', 'Please grant camera permission to use the scanner.');
      }
    })();
  }, []);


  useEffect(() => {
    (async () => {
      if (!Location) {
        console.error('Location is not available. Make sure expo-location is installed.');
        return;
      }

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        // Display coordinates first
        setLocationAddress(`Latitude: ${location.coords.latitude}\nLongitude: ${location.coords.longitude}`);

        // Make reverse geocoding request
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=AIzaSyBVySLCyfP7xyn8Zz2ntOiuMFaZWSk-9Uo`
        );

        if (response.data.results.length > 0) {
          const address = response.data.results[0].formatted_address;
          setLocationAddress(address);
        }
      } catch (error) {
        console.error('Error getting location:', error);
        setErrorMsg('Error getting location');
      }
    })();
  }, []);

  const dateToWords = (date) => {
    const options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const timeToWords = (time) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return time.toLocaleTimeString(undefined, options);
  };

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => { 
    (async () => {
      const { status } = await requestPermission();
      if (status !== 'granted') {
        alert('Permission denied');
      }
    })();
  }, []);

  const handleCaptureImage = async () => {
    if (cameraRef.current) {
      const options = {
        mediaType: 'photo',
        quality: 1,
      };

      const { status } = await requestPermission();
      if (status !== 'granted') {
        alert('Permission denied');
        return;
      }

      const { uri } = await cameraRef.current.takePictureAsync();

      try {
        const asset = await MediaLibrary.createAssetAsync(uri);
        alert('Image saved to camera roll');

        // Pass captured image URI along with other data to the EvidenceSubmission screen
        navigation.navigate('ScanHistory', {
          capturedImage: asset.uri,
          time: timeToWords(new Date()),
          date: dateToWords(new Date()),
          location: locationAddress,
        });
      } catch (error) {
        console.error('Error saving image to camera roll:', error);
      }
    }
  };

  const [zoom, setZoom] = useState(0);

  const zoomSensitivity = 0.1

  // const handleZoom = zoomFactor => {
  //   const newZoom = Math.max(0, Math.min(1, zoom + zoomFactor)); // Clamp the new zoom value between 0 and 1
  //   setZoom(newZoom);
  // };

  const newZoom = (event) => {
    const deltaScale = event.nativeEvent.scale - 1;
    const size = zoom + deltaScale * zoomSensitivity;
     setZoom(Math.max(0, Math.min(size, 1)));
  };

  // const onPinchGestureEvent = event => {
  //   const zoomFactor = event.nativeEvent.scale - 1; // Calculate the zoom factor based on pinch gesture scale
  //   if (event.nativeEvent.state === State.ACTIVE) {
  //     handleZoom(zoomFactor);
  //   }
  // };

  // const [flashMode, setFlashMode] = useState(FlashMode.off);

  // const toggleFlashMode = () => {
  //   setFlashMode(prevMode => {
  //     switch (prevMode) {
  //       case FlashMode.off:
  //         return FlashMode.on;
  //       case FlashMode.on:
  //         return FlashMode.auto;
  //       case FlashMode.auto:
  //         return FlashMode.off;
  //       default:
  //         return FlashMode.off;
  //     }
  //   });
  // };

  return (

    <Camera
      ref={cameraRef}
      style={styles.liveStreamIcon}
      onCameraReady={() => setIsCameraReady(true)}
      type={type}
      zoom={zoom}>

      {capturedImage &&
        <Image
          source={{ uri: capturedImage }}
          style={{ width: 100, height: 100 }}
        />
      }

      <PinchGestureHandler onGestureEvent={newZoom}>
        <View style={styles.controls} collapsable={false} />
      </PinchGestureHandler>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.image6} />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
      </TouchableOpacity>

      {location ? (
        <>
          <Text style={styles.march820232}>
            {timeToWords(currentTime)}
          </Text>

          <Text style={styles.march820231}>
            {dateToWords(new Date(location.timestamp))}
          </Text>

          <Text style={styles.march82023}>
            {locationAddress || 'Address not available'}
          </Text>
        </>
      ) : (
        <View>

          <Text style={styles.march82023}>Capturing GPS Co-ordinates, Date & Time...</Text>

          {/* <View style={[styles.iconLayout, styles.circle]} /> */}

        </View>
      )}


      {/* <TouchableOpacity onPress={handleCaptureImage} style={[styles.liveStreamChild, styles.iconLayout]} disabled={!location}>
       <Image
        style={{ transform: [{ scale: 0.35 }] }}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
       />
     </TouchableOpacity> */}

     <TouchableOpacity onPress={handleCaptureImage} style={[styles.iconLayout, styles.circle]}>
        <View />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('ScanDetails')} style={[styles.iconLayout, styles.rectangle]}>
        <Text style={styles.Skip}>Skip</Text>
      </TouchableOpacity>


      <TouchableOpacity style={[styles.groupIcon, styles.iconLayout]} onPress={toggleCameraType}>

        <Image
          contentFit="cover"
          source={require("../assets/flipcamera.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.vectorIcon1, styles.iconLayout]} >

        <Image
          style={{ transform: [{ scale: 0.35 }] }}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </TouchableOpacity>

      <Text style={[styles.photo, styles.liveTypo]}>PHOTO</Text>
      <Text style={[styles.video, styles.liveTypo]}>VIDEO</Text>


    </Camera>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 40,
    width: 39,
    position: "absolute",
  },
  circle: {
    backgroundColor: 'white',
    borderRadius: 36,
    top: "85%",
    left: "40%",
    width: 68,
    height: 68,
    position: "relative", 
    zIndex: 40
  },
  rectangle: {
    backgroundColor: '#F79520',
    borderRadius: 10,
    top: "79%",
    left: "15%",
    width: 68,
    height: 38,
    position: "relative", 
    zIndex: 40
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "visible",
  },
  liveTypo: {
    top: '80%',
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 14,
    fontSize: FontSize.size_mini_5,
    position: "absolute",
    overflow: "visible"
  },
  Skip: {
    top: '10%',
    left: "14%",
    height: 32,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "300",
    lineHeight: 34,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  image6: {
    top: 107,
    left: 135,
    width: 219,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorBlack,
  },
  vectorIcon: {
    height: "71.25%",
    width: "79.23%",
    top: "15%",
    right: "10.51%",
    bottom: "13.75%",
    left: "10.26%",
  },
  rectangleParent: {
    top: 61,
    left: 31,
  },
  march82023: {
    top: 605,
    left: 50,
    width: 270,
    height: 72,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 24,
    fontSize: FontSize.size_mini_5,
    position: "absolute",
  },
  march820231: {
    top: 575,
    left: 50,
    width: 370,
    height: 72,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 24,
    fontSize: FontSize.size_mini_5,
    position: "absolute",
  },
  march820232: {
    top: 575,
    left: 180,
    width: 270,
    height: 72,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 24,
    fontSize: FontSize.size_mini_5,
    position: "absolute",
  },
  liveStreamChild: {
    top: "80%",
    left: "24%",
    width: 63,
    height: 64,
    position: "absolute",
  },
  groupIcon: {
    height: "4.21%",
    width: "10.43%",
    top: "88%",
    right: "23.16%",
    bottom: "7.76%",
    left: "60%",
  },
  vectorIcon1: {
    height: "2.82%",
    width: "3.05%",
    top: "5.5%",
    right: "47.07%",
    bottom: "89.08%",
    left: "45.87%",
  },
  video: {
    left: 213,
  },
  live: {
    left: 267,
    width: 29,
  },
  photo: {
    left: 119,
  },
  liveStreamIcon: {
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default LiveStream;