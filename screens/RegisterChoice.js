import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const RegisterChoice = ({navigation}) => {
  return (
    <View style={styles.registerChoice}>
      <Image
        style={styles.registerPosition}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      />
      <View style={[styles.registerChoiceItem, styles.registerPosition]} />
      <View style={[styles.registerChoiceInner, styles.groupChildBg]} />
      <TouchableOpacity onPress={() => navigation.push('Register')}>
      <View style={[styles.login, styles.loginLayout1]}>
        <View style={[styles.loginChild, styles.loginLayout]} />
        <Text style={[styles.shipperRegistration, styles.registrationPosition]}>
          Shipper Registration
        </Text>
      </View>
      </TouchableOpacity>
      <View style={[styles.signupButton, styles.loginLayout1]}>
        <View style={[styles.login1, styles.loginLayout1]}>
        <TouchableOpacity onPress={() => navigation.push('FreightForwarder')}>
          <View style={styles.loginLayout} />
          <Text
            style={[
              styles.freightForwarderRegistration,
              styles.registrationPosition,
            ]}
          >
            Freight Forwarder Registration
          </Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <Text style={[styles.welcomeToUmofreight, styles.returnToHomeFlexBox]}>
        Welcome to UMOFreight!
      </Text>
      <Text style={[styles.kindlySelectYour, styles.umofreightIsATypo]}>
        Kindly select your registration type
      </Text>
      <Text style={[styles.umofreightIsA, styles.umofreightIsATypo]}>
        UMOFreight is a universal payment platform, we aim to provide you the
        best platform for all your transactions to and from your local country
        at your convenience.
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.umofreightParent}>
          <Text style={styles.umofreight}>
            <Text style={styles.umo}>UMO</Text>
            <Text style={styles.freight}>FREIGHT</Text>
          </Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/umofreight.png")}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.push('Login')}>
      <Text style={[styles.returnToHome, styles.returnToHomeFlexBox]}>
        Return To Home
      </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  registerPosition: {
    height: 340,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  loginLayout1: {
    height: 50,
    width: 312,
    position: "absolute",
  },
  loginLayout: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 50,
    width: 312,
    left: 0,
    top: 0,
    position: "absolute",
  },
  registrationPosition: {
    height: 19,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  returnToHomeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  umofreightIsATypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 32,
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 265,
    position: "absolute",
  },
  registerChoiceItem: {
    backgroundColor: Color.colorDarkslategray_200,
  },
  registerChoiceInner: {
    top: 342,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 570,
    width: 395,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  loginChild: {
    backgroundColor: Color.colorDarkslategray_100,
  },
  shipperRegistration: {
    marginLeft: -58,
    color: Color.colorWhite,
    width: 116,
  },
  login: {
    top: 519,
    left: 32,
    width: 312,
  },
  freightForwarderRegistration: {
    marginLeft: -87,
    width: 175,
    color: Color.colorDarkslategray_100,
  },
  login1: {
    width: 312,
    left: 0,
    top: 0,
  },
  signupButton: {
    top: 594,
    left: 32,
    width: 312,
  },
  welcomeToUmofreight: {
    marginLeft: -155.5,
    top: 375,
    fontSize: 26,
    color: Color.colorOrange,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    left: "50%",
  },
  kindlySelectYour: {
    top: 485,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  umofreightIsA: {
    top: 423,
    width: 305,
    height: 54,
    fontFamily: FontFamily.interRegular,
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    width: 265,
  },
  umo: {
    color: Color.colorDarkorange_200,
  },
  freight: {
    color: Color.colorDarkslategray_100,
  },
  umofreight: {
    top: 1,
    left: 18,
    fontSize: FontSize.size_15xl_7,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    height: "93.1%",
    width: "10.12%",
    top: "2.86%",
    right: "92.82%",
    bottom: "4.14%",
    left: "-2.94%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "visible",
  },
  umofreightParent: {
    top: 3,
    left: 10,
    width: 252,
    height: 29,
    position: "absolute",
  },
  rectangleParent: {
    top: 125,
    left: 55,
  },
  returnToHome: {
    top: 744,
    left: 141,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  registerChoice: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_100,
  },
});

export default RegisterChoice;