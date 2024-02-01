import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { Camera, BarCodeScanner } from 'expo-camera';
import * as Location from 'expo-location';
import axios from 'axios';

const Scanner = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationAddress, setLocationAddress] = useState('');

    const scaleValue = 0.4; // Adjust the scale as needed
    const cameraRef = useRef(null);
    const [isCameraReady, setIsCameraReady] = useState(false);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
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

   // useEffect(() => {
    //  console.log('Camera ready:', isCameraReady);
   // }, [isCameraReady]);
    
    const handleBarCodeRead = async (event) => {
      if (isCameraReady) {
        try {
          const scannedData = event.data;
          // Send the scanned data to your endpoint using fetch or any other method
          // Example using fetch:
          const response = await fetch('https://umofreight.com/api/v1/auth/shipment_information/service_type?service_type=shipping', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: scannedData }),
          });
  
          // Handle the response as needed
          if (response.ok) {
            Alert.alert('Success', 'Data sent successfully.');
          } else {
            Alert.alert('Error', 'Failed to send data.');
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
      }
    };

    const dateToWords = (date) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };

  return (
    <View style={styles.scanner}>
    
    <Camera
        ref={cameraRef}
        style={styles.scannerChild}
        type={Camera.Constants.Type.back}
        flashMode={Camera.Constants.FlashMode.off}
        onCameraReady={() => setIsCameraReady(true)}
        onBarCodeScanned={handleBarCodeRead}
    />

      <View style={styles.scannerItem} />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />

      {location ? (
        <>
          <Text style={[styles.march82023, styles.march82023Typo]}>
          {dateToWords(new Date(location.timestamp))}
          </Text>
          <Text style={[styles.onyankeleStreet, styles.march82023Typo]}>
          {locationAddress}
          </Text>
        </>
      ) : (
        <Text style={[styles.march82023, styles.searchlocationTypo]}>Loading location...</Text>
      )}

      <TouchableOpacity style={[styles.vectorIcon, styles.skipChildLayout]} onPress={() => navigation.goBack()}>
      <Image
        style={{ transform: [{ scale: 0.6 }] }}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.skipWrapper, styles.skipLayout]}>
        <View style={[styles.skip, styles.skipLayout]}>
          <Image
            style={[styles.skipChild, styles.skipChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-7.png")}
          />
          <Text style={styles.back}>BACK</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  march82023Typo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_mid_4,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  searchlocationTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_mid_4,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "58%",
    position: "absolute",
  },
  skipChildLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  skipLayout: {
    height: 73,
    width: 197,
    left: "50%",
    position: "absolute",
  },
  scannerLayout: {
    height: 88,
    width: 86,
    borderRadius: 2,
    top: 558,
    position: "absolute",
  },
  scannerChildLayout: {
    height: 20,
    width: 20,
    top: 550,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "24.43%",
    top: "66%",
    width: "6.35%",
    height: "2.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "visible",
  },
  scannerChild: {
    top: 252,
    left: 30,
    width: 331,
    height: 374,
    position: "absolute",
    zIndex: 5
  },
  scannerItem: {
    top: 301,
    left: 53,
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1,
    width: 270,
    height: 163,
    position: "absolute",
  },
  image1Icon: {
    marginLeft: -115.5,
    top: 67,
    width: 233,
    height: 26,
    left: "50%",
    position: "absolute",
  },
  march82023: {
    marginLeft: -100.5,
    top: 147,
    width: 203,
    height: 30,
  },
  onyankeleStreet: {
    marginLeft: -110.5,
    top: 169,
    width: 285,
    height: 30,
  },
  vectorIcon: {
    height: "1.6%",
    width: "3.57%",
    top: "6.92%",
    right: "90.05%",
    bottom: "91.48%",
    left: "6.37%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "visible",
  },
  skipChild: {
    height: "57.53%",
    marginLeft: -159.6,
    top: "26.03%",
    bottom: "16.44%",
    borderRadius: 10,
    width: 319,
    left: "50%",
  },
  back: {
    height: "53.42%",
    marginLeft: -55.6,
    top: "30.14%",
    fontSize: FontSize.size_9xl_2,
    color: Color.white,
    textAlign: "center",
    width: 111,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  skip: {
    marginLeft: -98.6,
    top: 0,
  },
  skipWrapper: {
    marginLeft: -98.5,
    top: 654,
  },
  scannerInner: {
    left: 54,
  },
  groupIcon: {
    left: 125,
  },
  rectangleIcon: {
    left: 148,
  },
  scannerChild1: {
    left: 218,
  },
  scannerChild2: {
    left: 242,
  },
  scannerChild3: {
    left: 312,
  },
  vectorIcon1: {
    right: "86.45%",
    left: "1%",
  },
  vectorIcon2: {
    right: "5.25%",
    left: "78.4%",
  },
  scanner: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Scanner;