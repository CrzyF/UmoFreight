import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Onboarding1 = ({navigation}) => {
  return (
    <View style={styles.onboarding5}>

      <Image
        style={styles.beepBeepDrifting1}
        contentFit="cover"
        source={require("../assets/beep-beep--drifting-1.png")}
      />

      <Text style={styles.welcomeToUmoplus}>Welcome to UmoFreight</Text>
      <Text
        style={styles.pleaseGrantUs}
      >{`Please grant us access to your Camera so that we can scan and provide dynamic QR codes. `}</Text>
      <Image
        style={styles.onboarding5Child}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />


      <TouchableOpacity onPress={() => navigation.push('Onboarding2')} style={[styles.next, styles.nextLayout]}>
        <View style={[styles.nextChild, styles.childLayout]}>
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Login')} style={[styles.skip, styles.nextLayout]}>
        <View style={[styles.skipChild, styles.childLayout]} />
        <Text style={[styles.skip1, styles.next1Typo]}>Skip</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  nextLayout: {
    height: 30,
    width: 114,
  },
  next1Typo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  welcomeToUmoplus: {
    top: 442,
    left: 50,
    fontSize: 21,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemiBold,
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  pleaseGrantUs: {
    top: 490,
    left: 53,
    fontFamily: FontFamily.poppinsRegular,
    color: "#a8a8a8",
    width: 269,
    height: 51,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  onboarding5Child: {
    top: 632,
    left: 169,
    width: 36,
    height: 8,
    position: "absolute",
  },
  next1: {
    top: 8,
    left: 44,
    color: Color.colorDarkorange,
  },
  nextChild: {
    top: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkorange,
    borderWidth: 1,
    left: 0,
    height: 30,
    width: 114,
    zIndex: 100,
  },
  next: {
    left: 239,
    top: 719,
    width: 114,
    position: "absolute",
  },
  skipChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorDarkorange,
    width: "100%",
  },
  skip1: {
    top: "26.67%",
    left: "39.47%",
    color: Color.colorWhite,
  },
  skip: {
    left: 23,
    top: 719,
    width: 114,
    position: "absolute",
  },
  beepBeepDrifting1: {
    top: 172,
    width: 383,
    height: 259,
    left: 25,
    position: "absolute",
  },
  onboarding5: {
    backgroundColor: "#fafafa",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding1;
