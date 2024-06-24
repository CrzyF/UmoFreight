import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const ScanOptions = ({navigation}) => {
  return (
    <View style={styles.scanHistory}>

      <TouchableOpacity style={[styles.skipWrapper, styles.skipLayout5]} onPress={() => navigation.push('Scanner')}>
        <View style={[styles.skip, styles.skipLayout5]}>
          <View style={[styles.skipChild, styles.skipBg]} />
          <Text style={[styles.pickup, styles.pickupPosition]}>Warehouse</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.skipContainer, styles.skipLayout]} onPress={() => navigation.push('Scanner')}>
        <View style={[styles.skip1, styles.skipLayout]}>
          <View style={[styles.skipItem, styles.skipBg]} />
          <Text style={[styles.transport, styles.backTypo]}>Pickup</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.skipFrame, styles.skipLayout5]} onPress={() => navigation.push('Scanner')}>
        <View style={[styles.skip, styles.skipLayout5]}>
          <View style={[styles.skipInner, styles.skipBg]} />
          <Text style={[styles.delivery, styles.pickupPosition]}>Transit</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.skipFrame1, styles.skipLayout5]} onPress={() => navigation.push('Scanner')}>
        <View style={[styles.skip, styles.skipLayout5]}>
          <View style={[styles.skipInner, styles.skipBg]} />
          <Text style={[styles.delivery, styles.pickupPosition]}>Delivery</Text>
        </View>
      </TouchableOpacity>

      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.groupView, styles.skipLayout5]}>
        <View style={[styles.skip, styles.skipLayout5]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-7.png")}
          />
          <Text style={[styles.back, styles.backTypo]}>BACK</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.vectorIcon, styles.iconLayout]}>
      <Image
        contentFit="cover"
        source={require("../assets/back.png")}
      />

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  skipLayout5: {
    height: 73,
    width: 197,
    left: "50%",
    position: "absolute",
  },
  skipBg: {
    backgroundColor: Color.colorDarkorange_100,
    position: "absolute",
  },
  pickupPosition: {
    width: 184,
    marginTop: -19.5,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: 28,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  skipLayout: {
    height: 52,
    width: 176,
    position: "absolute",
  },
  backTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: 28,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  skipChild: {
    top: "13.7%",
    bottom: "15.07%",
    borderRadius: 17,
    left: "0%",
    right: "0%",
    height: "71.23%",
    backgroundColor: Color.colorDarkorange_100,
    width: "100%",
  },
  pickup: {
    marginLeft: -92.6,
    height: 38,
  },
  skip: {
    marginLeft: -98.6,
    top: 0,
  },
  skipWrapper: {
    top: 177,
    marginLeft: -98.5,
    height: 73,
  },
  skipItem: {
    height: "105%",
    marginLeft: -98.8,
    top: "3.08%",
    bottom: "-9.23%",
    borderRadius: 19,
    backgroundColor: Color.colorDarkorange_100,
    width: 197,
    left: "50%",
  },
  transport: {
    marginTop: -14,
    marginLeft: -82.8,
    width: 166,
    height: 30,
    fontFamily: FontFamily.interRegular,
    top: "50%",
    color: Color.white,
    fontSize: 28,
  },
  skip1: {
    left: 0,
    top: 0,
  },
  skipContainer: {
    top: 311,
    left: 109,
  },
  skipInner: {
    top: "12.33%",
    bottom: "16.44%",
    borderRadius: 17,
    left: "0%",
    right: "0%",
    height: "71.23%",
    backgroundColor: Color.colorDarkorange_100,
    width: "100%",
  },
  delivery: {
    marginLeft: -91.6,
    height: 39,
  },
  skipFrame: {
    top: 433,
    marginLeft: -98.5,
    height: 73,
  },
  skipFrame1: {
    top: 563,
    marginLeft: -98.5,
    height: 73,
  },
  image1Icon: {
    marginLeft: -116.5,
    top: 66,
    width: 233,
    height: 26,
    left: "50%",
    position: "absolute",
  },
  rectangleIcon: {
    height: "57.53%",
    marginLeft: -159.6,
    top: "26.03%",
    borderRadius: 10,
    width: 319,
    bottom: "16.44%",
    left: "50%",
  },
  back: {
    height: "53.42%",
    marginLeft: -55.6,
    top: "30.14%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 111,
    color: Color.white,
    fontSize: 28,
  },
  groupView: {
    top: 754,
    marginLeft: -98.5,
    height: 73,
  },
  vectorIcon: {
    height: "1.6%",
    width: "3.57%",
    top: "6.92%",
    right: "90.05%",
    bottom: "91.48%",
    left: "6.37%",
    maxWidth: "100%",
    overflow: "visible",
    position: "absolute"
  },
  scanHistory: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ScanOptions;