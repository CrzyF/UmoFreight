import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ShipmentPreview = ({ navigation, route }) => {
  const { scannedItems } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.phtruckBoldParent}>
        <View style={styles.phtruckBold} />
        <View style={styles.groupChild} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={{ uri: item.capturedImage }}
        />
        <Text style={styles.locatedLondon}>
          Located: {item.location}
        </Text>
        <Text style={styles.expectedArrival}>
          {item.date} {item.time}
        </Text>
        <Text style={styles.of28}>3 of 28</Text>
        <Text style={styles.ty39yuh980ydgifgg}>
          45TY39YUH980YDGIFGG
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
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.umofreightAutoTracker}>
        UmoFreight Auto Tracker
      </Text>

      <TouchableOpacity style={styles.delayedPackagesChild} onPress={() => navigation.push('ScanHistory')}>
        <Image
          style={{ transform: [{ scale: 0.3 }] }}  
          contentFit="cover"
          source={require("../assets/rectangle-72.png")}
        />
      </TouchableOpacity>

      <Text style={styles.submit}>SUBMIT</Text>

      <Text style={styles.of285}>{scannedItems.length} of {scannedItems.length}</Text>
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
    width: 158,
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
});

export default ShipmentPreview;