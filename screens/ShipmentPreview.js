import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const extractShipmentStatus = (scannedData) => {
  const match = scannedData.match(/shipmentStatus:\s*([^,]+)/);
  return match ? match[1].trim() : 'N/A';
};

const extractPackageID = (scannedData) => {
  const match = scannedData.match(/PackageID:\s*(\d+)/);
  return match ? match[1] : 'N/A';
};

const extractTotalPackages = (scannedData) => {
  const match = scannedData.match(/TotalPackages:\s*(\d+)/);
  return match ? match[1] : 'N/A';
};

const extractPackageCount = (scannedData) => {
  const match = scannedData.match(/PackageCount:\s*(\d+)/);
  return match ? match[1] : 'N/A';
};

const extractShipId = (scannedData) => {
  const match = scannedData.match(/shipid:\s*(\d+)/);
  return match ? match[1] : 'N/A';
};

const ShipmentPreview = ({ navigation }) => {
  const [scannedItems, setScannedItems] = useState([]);

  useEffect(() => {
    const fetchAsyncStorageData = async () => {
      try {
        const scannedData = await AsyncStorage.getItem("scannedData");
        if (scannedData) {
          const parsedData = JSON.parse(scannedData);
          setScannedItems(parsedData);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchAsyncStorageData();
  }, []);

  const sendTrackingData = async () => {
    try {
      const scannedData = await AsyncStorage.getItem("scannedData");
      const allData = JSON.parse(scannedData);

      let formdata = new FormData();
      formdata.append("shipmentId", extractShipId(allData[0].scannedData) || "N/A");
      formdata.append("packageId", extractPackageID(allData[0].scannedData) || "N/A");
      formdata.append("locations", JSON.stringify(allData.map(item => item.location)));
      formdata.append("dateTimes", JSON.stringify(allData.map(item => item.date + 'T' + item.time + 'Z')));
      formdata.append("images", allData.map(item => ({ uri: item.capturedImage, name: 'image.jpg', type: 'image/jpeg' })));
      formdata.append("numberOfPackages", extractTotalPackages(allData[0].scannedData).toString() || "N/A");
      formdata.append("shipmentStatus", extractShipmentStatus(allData[0].scannedData) || "N/A");
      formdata.append("shipperId", "20");

      const myHeaders = new Headers();
      myHeaders.append("x-auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjIwLCJpYXQiOjE3MjI0MjIxNDB9.oQ6RuR_oaX3jaqiNYQeA2IXvmRCC0WNqalS3ZhCDtIw");

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      const response = await fetch("https://dev.umofreight.com/api/v1/auth/shipment_information/tracking", requestOptions);

      if (response.ok) {
        Alert.alert("Success", "Tracking Status Updated");
      } else {
        Alert.alert("Error", "Failed To Update Tracking");
        console.error('Failed to send tracking data:', response.statusText);
      }
    } catch (error) {
      Alert.alert("Error", "Failed To Update Tracking");
      console.error('Error sending tracking data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.phtruckBoldParent}>
        <View style={styles.phtruckBold} />
        <View style={styles.groupChild} />
        <Image
          style={styles.groupItem}
          source={{ uri: item.capturedImage }}
        />
        <Text style={styles.locatedLondon}>
          {extractShipmentStatus(item.scannedData)}
        </Text>
        <Text style={styles.expectedArrival}>
          {item.date} {item.time}
        </Text>
        <Text style={styles.of28}>
          {extractPackageCount(item.scannedData)} of {extractTotalPackages(item.scannedData)}
        </Text>
        <Text style={styles.ty39yuh980ydgifgg}>
          Package ID: {extractPackageID(item.scannedData)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.delayedPackages}>
      <Text style={styles.scannedPreview}>
        Scanned Preview
      </Text>

      <FlatList
        data={scannedItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />

      <Image
        style={styles.image1Icon}
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.umofreightAutoTracker}>
        UmoFreight Auto Tracker
      </Text>

      <TouchableOpacity style={styles.delayedPackagesChild} onPress={sendTrackingData}>
        <Image
          style={{ transform: [{ scale: 0.3 }] }}
          source={require("../assets/rectangle-72.png")}
        />
      </TouchableOpacity>

      <Text style={styles.submit}>SUBMIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scannedPreview: {
    textAlign: "center",
    position: "absolute",
    marginLeft: -123.5,
    top: 111,
    fontSize: 27,
    height: 67,
    width: 247,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  listContainer: {
    paddingTop: 200,
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  itemContainer: {
    marginBottom: 15,
  },
  phtruckBoldParent: {
    width: '100%',
    height: 90,
    position: 'relative',
  },
  phtruckBold: {
    left: 341,
    width: 12,
    height: 12,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorWhitesmoke,
    width: '100%',
    height: '100%',
    position: "absolute",
  },
  groupItem: {
    left: 14,
    borderRadius: 17,
    width: 67,
    height: 61,
    top: 18,
    position: "absolute",
  },
  locatedLondon: {
    height: 18,
    color: Color.colorBlack,
    width: 258,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 84,
    fontSize: FontSize.size_sm,
    top: 38,
    position: "absolute",
  },
  expectedArrival: {
    top: 62,
    height: 18,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 84,
    position: "absolute",
  },
  of28: {
    top: 17,
    left: 259,
    width: 49,
    height: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  ty39yuh980ydgifgg: {
    fontSize: FontSize.size_sm_5,
    width: 170,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 84,
    color: Color.colorBlack,
    position: "absolute",
    top: 18,
  },
  image1Icon: {
    marginLeft: -116.5,
    top: 66,
    width: 233,
    height: 26,
    left: "50%",
    position: "absolute",
  },
  umofreightAutoTracker: {
    top: 145,
    left: 53,
    fontSize: FontSize.size_smi,
    width: 269,
    height: 32,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  delayedPackagesChild: {
    height: "5.17%",
    marginLeft: -490,
    top: "83.67%",
    bottom: "6.16%",
    borderRadius: 10,
    maxHeight: "100%",
    width: 327,
    left: "50%",
    position: "absolute",
  },
  submit: {
    height: "4.8%",
    marginLeft: -111.5,
    top: "89.04%",
    fontSize: FontSize.size_9xl_2,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    width: 224,
    left: "65%",
    position: "absolute",
  },
  of285: {
    marginLeft: -36.5,
    top: 172,
    fontSize: FontSize.size_mid_4,
    color: Color.colorDarkslategray_100,
    width: 73,
    height: 21,
    left: "50%",
  },
  delayedPackages: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default ShipmentPreview;
