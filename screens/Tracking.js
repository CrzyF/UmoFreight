import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { Share } from "react-native";

const Tracking = ({navigation}) => {

  handleShare = () => {
    // Implement your share functionality here
    Share.share({
      message: 'Link To Shipment Details',
      // Add other share options if needed
    });
  };

  return (
    <TouchableOpacity onPress={() => navigation.push('Status')}>
    <View style={styles.packageDetailsParent}>
      <View style={[styles.packageDetails, styles.packageDetailsPosition]}>
        <Text style={styles.umofreightAutoTracker}>
          UmoFreight Auto Tracker
        </Text>
        <View
          style={[styles.mingcutearrowUpFill, styles.packageDetailsPosition]}
        />
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Image
            style={styles.groupInner}
            contentFit="cover"
            source={require("../assets/rectangle-61.png")}
          />
          <Text style={[styles.deliveryAddress, styles.contactTypo]}>
            Delivery Address -
          </Text>
          <Text
            style={[styles.springCreekDr, styles.springCreekDrTypo]}
          >{` 11858 spring creek dr, 
  pickerington                                       43147-7721`}</Text>
          <Text style={[styles.contact, styles.contactTypo]}>Contact -</Text>
          <Text
            style={[styles.samuelBanning, styles.springCreekDrTypo]}
          >{`Samuel Banning - +1 456 93792 `}</Text>
          <Text style={styles.kwesiFosu}>Kwesi Fosu</Text>
          <Text style={[styles.ty39yuh980, styles.ty39yuh980Typo]}>
            45TY39YUH980
          </Text>
          <Text style={[styles.itemsFebruary, styles.ty39yuh980Typo]}>
            28 Items , February 14
          </Text>


          <Image
           style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/track.png")}
          />


          <Image
            style={styles.biqrCodeIcon}
            contentFit="cover"
            source={require("../assets/biqrcode.png")}
          />

          <TouchableOpacity onPress={this.handleShare}>
          <Image
            style={styles.icsharpShareIcon}
            contentFit="cover"
            source={require("../assets/icsharpshare.png")}
          />
          </TouchableOpacity>
          
        </View>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/headphonesblack.png")}
        />
      </View>

      <TouchableOpacity style={[styles.vectorIcon2, styles.vectorIconLayout]}>
      <Image
        style={{ transform: [{ scale: 0.4 }] }}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      </TouchableOpacity>

      <View style={styles.qty28Parent}>
        <Text style={[styles.qty28, styles.qtyTypo]}>QTY 28</Text>
        <Text style={[styles.qty281, styles.qtyTypo]}>QTY 28</Text>
        <Text style={[styles.qty282, styles.qtyTypo]}>QTY 28</Text>
        <Text style={[styles.qty26, styles.qtyTypo]}>QTY 26</Text>
        <Text style={[styles.text, styles.qtyTypo]}>-</Text>
        <Text style={[styles.pickupMarch8, styles.marchTypo1]}>
          Pickup: March 8 / 9:59 AM / New York, USA
        </Text>
        <Text style={[styles.transitMarch8, styles.marchTypo1]}>
          Transit: March 8 / 9:59 AM / London, UK
        </Text>
        <Text style={[styles.transitMarch11, styles.marchTypo1]}>
          Transit: March 11 / 9:59 AM / Accra Port, GH
        </Text>
        <Text style={[styles.transitMarch12, styles.marchTypo]}>
          Transit: March 12 / 9:59 AM / Accra, GH
        </Text>
        <Text style={[styles.deliveryMarch13, styles.marchTypo]}>
          Delivery: March 13, 4:59 PM, Kumasi, GH
        </Text>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.groupChild1, styles.lineViewLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout1]} />
        <View style={[styles.groupChild3, styles.groupChildLayout1]} />
        <View style={[styles.groupChild4, styles.groupChildLayout1]} />
        <View style={[styles.groupChild5, styles.groupChildLayout1]} />
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-45.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-46.png")}
        />
        <Image
          style={[styles.groupChild7, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-46.png")}
        />
        <Image
          style={[styles.groupChild8, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-46.png")}
        />
        <Image
          style={[styles.groupChild9, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-47.png")}
        />
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  packageDetailsPosition: {
    overflow: "visible",
    position: "absolute",
  },
  groupParentLayout: {
    height: 464,
    width: 364,
    position: "absolute",
  },
  contactTypo: {
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs_5,
    color: Color.colorDarkgray,
    position: "absolute",
  },
  springCreekDrTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi_9,
    color: Color.colorBlack,
    height: 49,
    textAlign: "left",
    position: "absolute",
  },
  ty39yuh980Typo: {
    fontSize: FontSize.size_sm_5,
    height: 18,
    left: 86,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "visible",
    position: "absolute",
  },
  qtyTypo: {
    width: 48,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs_4,
    left: 266,
    height: 19,
    textAlign: "left",
    position: "absolute",
  },
  marchTypo1: {
    color: Color.colorDarkslategray_100,
    left: 23,
    fontSize: FontSize.size_2xs_4,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  marchTypo: {
    left: 24,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_2xs_4,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  lineViewLayout: {
    height: 23,
    width: 2,
    borderRightWidth: 2,
    borderStyle: "solid",
    left: 3,
    borderColor: Color.colorLimegreen,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 13,
    width: 2,
    borderRightWidth: 2,
    borderStyle: "solid",
    left: 3,
    position: "absolute",
  },
  groupChildLayout: {
    height: 8,
    width: 8,
    left: 0,
    position: "absolute",
  },
  umofreightAutoTracker: {
    top: 118,
    left: 53,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    width: 269,
    height: 32,
    textAlign: "center",
    color: Color.colorDarkgray,
    position: "absolute",
  },
  mingcutearrowUpFill: {
    top: 430,
    left: 44,
    width: 17,
    height: 17,
    transform: [
      {
        rotate: "90.81deg",
      },
    ],
  },
  packageDetails: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    left: 0,
    top: 0,
    height: "100%",
  },
  image1Icon: {
    marginLeft: -116.5,
    top: 66,
    left: "50%",
    width: 233,
    height: 26,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 18,
    borderRadius: 17,
    width: 67,
    height: 61,
    left: 14,
    position: "absolute",
  },
  deliveryAddress: {
    top: 304,
    left: 13,
    width: 86,
  },
  springCreekDr: {
    top: 300,
    left: 103,
    width: 162,
    color: Color.colorBlack,
  },
  contact: {
    top: 359,
    width: 46,
    left: 14,
  },
  samuelBanning: {
    top: 355,
    left: 66,
    width: 209,
    color: Color.colorBlack,
  },
  kwesiFosu: {
    top: 15,
    fontSize: FontSize.size_base_5,
    width: 84,
    height: 18,
    left: 86,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  ty39yuh980: {
    top: 36,
    width: 106,
  },
  itemsFebruary: {
    top: 57,
    width: 149,
  },
  vectorIcon: {
    width: "4.94%",
    right: "6.4%",
    left: "88.66%",
    bottom: "91.53%",
    top: "5.17%",
    height: "3.3%",
    maxHeight: "80%",
    maxWidth: "80%",
  },
  biqrCodeIcon: {
    top: 392,
    width: 56,
    height: 56,
    left: 266,
    overflow: "hidden",
    position: "absolute",
  },
  icsharpShareIcon: {
    top: 24,
    left: 265,
    width: 15,
    height: 15,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    width: "4.45%",
    right: "15.32%",
    left: "80.23%",
    bottom: "91.53%",
    top: "5.17%",
    height: "3.3%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupParent: {
    top: 200,
    left: 15,
  },
  vectorIcon2: {
    height: "1.6%",
    width: "3.57%",
    top: "6.92%",
    right: "90.05%",
    bottom: "91.48%",
    left: "6.37%",
  },
  qty28: {
    color: Color.colorLimegreen,
    width: 48,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs_4,
    top: 0,
  },
  qty281: {
    top: 27,
    color: Color.colorLimegreen,
    width: 48,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs_4,
  },
  qty282: {
    top: 54,
    color: Color.colorLimegreen,
    width: 48,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs_4,
  },
  qty26: {
    color: "#b68802",
    top: 81,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs_4,
    width: 48,
  },
  text: {
    top: 108,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs_4,
    width: 48,
    color: Color.colorBlack,
  },
  pickupMarch8: {
    width: 263,
    top: 0,
  },
  transitMarch8: {
    width: 273,
    top: 27,
  },
  transitMarch11: {
    width: 268,
    top: 54,
  },
  transitMarch12: {
    width: 271,
    top: 81,
  },
  deliveryMarch13: {
    width: 282,
    top: 108,
  },
  lineView: {
    top: 8,
  },
  groupChild1: {
    top: 35,
  },
  groupChild2: {
    top: 61,
    borderColor: Color.colorOrange,
  },
  groupChild3: {
    top: 99,
    borderColor: "#ff0000",
  },
  groupChild4: {
    top: 72,
    borderColor: Color.colorLimegreen,
    height: 13,
  },
  groupChild5: {
    top: 88,
    borderColor: Color.colorLimegreen,
    height: 13,
  },
  ellipseIcon: {
    top: 56,
  },
  groupChild6: {
    top: 83,
  },
  groupChild7: {
    top: 29,
  },
  groupChild8: {
    top: 2,
  },
  groupChild9: {
    top: 110,
  },
  qty28Parent: {
    top: 337,
    left: 30,
    width: 314,
    height: 123,
    position: "absolute",
  },
  packageDetailsParent: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Tracking;
