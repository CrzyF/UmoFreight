import * as React from "react";
import { useRef } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Share } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import ViewShot from 'react-native-view-shot';

const PrintPreview = ({navigation}) => {

    const viewShotRef = useRef();

    const handleShareScreenshot = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        const uri = await viewShotRef.current.capture();
        console.log('Screenshot captured:', uri);
  
        // Use Share API to share the screenshot
        Share.share({
          message: 'Check out my label!',
          url: uri,
        });
      } catch (error) {
        console.error('Error capturing screenshot:', error);
      }
    };

  return (
    <View style={styles.printPreview}>
      <Text style={[styles.thisAllowsYou, styles.printLabelFlexBox]}>
        This allows you to verify the details of the document on the screen
        before printing
      </Text>
      <Text style={[styles.printPreview1, styles.priorityMailTypo]}>
        Print Preview
      </Text>
      <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupChildBorder]} />
          <Text style={[styles.trackingDxPv54, styles.textTypo]}>
            Tracking #: DX-PV54
          </Text>
          <View style={[styles.groupChild1, styles.groupChildBorder]} />
          <Text style={[styles.text, styles.textTypo]}>
            3985 3857 2093 3811 4903
          </Text>
          <View style={[styles.groupChild2, styles.groupChildBorder]} />
          <View style={[styles.groupChild3, styles.groupChildBorder]} />
          <Text style={styles.p}>P</Text>
          <Text style={[styles.priorityMail, styles.priorityMailTypo]}>
            PRIORITY MAIL
          </Text>
          <View style={[styles.shipToParent, styles.shipToParentLayout]}>
            <Text style={[styles.shipTo, styles.fromTypo]}>Ship to</Text>
            <Text
              style={[styles.samuelBanning11858, styles.borisSemenyuk4807Typo]}
            >{`Samuel Banning 
11858 spring creek dr
pickerington oh 43147-7721`}</Text>
          </View>
          <View style={[styles.fromParent, styles.fromParentLayout]}>
            <Text style={[styles.from, styles.fromTypo]}>From</Text>
            <Text
              style={[styles.borisSemenyuk4807, styles.fromParentLayout]}
            >{`Boris Semenyuk
4807 redwood terr.
north port fl 34286-2744`}</Text>
          </View>
        </View>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/barcode.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>

      <TouchableOpacity onPress={handleShareScreenshot} style={[styles.skipWrapper, styles.skipLayout]}>
        <View style={[styles.skip, styles.skipLayout]}>
          <View style={styles.skipChild} />
          <Text style={[styles.printLabel, styles.printLabelFlexBox]}>
            Print Label
          </Text>
        </View>
      </TouchableOpacity>

      </ViewShot>

      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />

      <TouchableOpacity style={[styles.vectorIcon1, styles.iconLayout]} onPress={() => navigation.goBack()}>
      <Image
        style={{ transform: [{ scale: 0.4 }] }}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  printLabelFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  priorityMailTypo: {
    height: 32,
    width: 189,
    fontSize: FontSize.size_4xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    position: "absolute",
  },
  parentLayout: {
    height: 518,
    width: 331,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    width: 331,
    position: "absolute",
  },
  groupLayout: {
    height: 72,
    width: 73,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 10,
    position: "absolute",
  },
  textTypo: {
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 13,
    color: Color.colorBlack,
    position: "absolute",
  },
  shipToParentLayout: {
    width: 177,
    position: "absolute",
  },
  fromTypo: {
    height: 19,
    fontFamily: FontFamily.interRegular,
    fontSize: 10,
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.colorDarkgray,
    position: "absolute",
  },
  borisSemenyuk4807Typo: {
    top: 15,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 13,
    left: 0,
    color: Color.colorBlack,
  },
  fromParentLayout: {
    width: 198,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "visible",
  },
  skipLayout: {
    height: 38,
    width: 328,
    position: "absolute",
  },
  thisAllowsYou: {
    top: 149,
    left: 54,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    width: 267,
    height: 42,
    color: Color.colorDarkgray,
    textAlign: "center",
  },
  printPreview1: {
    top: 103,
    left: 93,
  },
  groupChild: {
    height: 508,
    top: 10,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 258,
  },
  rectangleView: {
    top: 478,
    height: 40,
  },
  trackingDxPv54: {
    top: 488,
    left: 105,
    width: 133,
  },
  groupChild1: {
    top: 348,
    height: 131,
  },
  text: {
    top: 456,
    left: 82,
    width: 179,
  },
  groupChild2: {
    top: 128,
    height: 221,
  },
  groupChild3: {
    top: 81,
    height: 48,
  },
  p: {
    left: 5,
    fontSize: 66,
    width: 63,
    height: 92,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    position: "absolute",
  },
  priorityMail: {
    top: 89,
    left: 71,
  },
  shipTo: {
    width: 83,
  },
  samuelBanning11858: {
    height: 64,
    width: 177,
    position: "absolute",
  },
  shipToParent: {
    top: 254,
    height: 79,
    left: 11,
  },
  from: {
    width: 76,
  },
  borisSemenyuk4807: {
    height: 47,
    top: 15,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 13,
    left: 0,
    color: Color.colorBlack,
  },
  fromParent: {
    top: 151,
    height: 62,
    left: 11,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "17.37%",
    width: "80.06%",
    top: "69.88%",
    right: "9.97%",
    bottom: "12.74%",
    left: "9.97%",
  },
  groupIcon: {
    height: "13.9%",
    width: "21.75%",
    top: "2.12%",
    right: "0.3%",
    bottom: "83.98%",
    left: "77.95%",
  },
  groupParent: {
    top: 198,
    left: 22,
  },
  skipChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: Color.colorDarkorange_100,
    position: "absolute",
    width: "100%",
  },
  printLabel: {
    top: "5.26%",
    left: "27.44%",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
  },
  skip: {
    left: 0,
    top: 0,
  },
  skipWrapper: {
    top: 737,
    left: 23,
  },
  image1Icon: {
    marginLeft: -115.5,
    top: 67,
    left: "50%",
    width: 233,
    height: 26,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.6%",
    width: "3.57%",
    top: "6.92%",
    right: "90.05%",
    bottom: "91.48%",
    left: "6.37%",
  },
  printPreview: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PrintPreview;