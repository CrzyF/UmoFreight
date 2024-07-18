import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const raw = JSON.stringify({
      email: email,
      password: password,
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    };

    fetch('https://umopay.com/api/v1/login', requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.login}>
      <Image
        style={styles.childPosition}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      />
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <View style={[styles.groupItem, styles.groupBg]} />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.loginLayout1]} />
        <Text style={styles.email}>Email</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.loginLayout1]} />
        <Text style={styles.email}>Password</Text>
      </View>

      <TouchableOpacity onPress={handleLogin} style={[styles.login1, styles.loginLayout1]}>
        <View style={[styles.loginItem, styles.loginLayout]} />
        <Text style={[styles.login2, styles.login2Position]}>Login</Text>
      </TouchableOpacity>

      <Text
        style={[styles.passwordForgotten, styles.orTypo]}
      >{`Password forgotten?`}</Text>
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      
      <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
      <Text style={[styles.reset, styles.resetClr]}>Reset</Text>
      </TouchableOpacity>

      <View style={[styles.rememberMeWrapper, styles.loginChild1Position]}>
        <Text style={[styles.rememberMe, styles.orTypo]}>Remember me</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.push('RegisterChoice')} style={[styles.signupButton, styles.signupButtonPosition]}>
        <View style={[styles.login3, styles.loginLayout1]}>
          <View style={[styles.loginInner, styles.loginLayout]} />
          <Text style={[styles.newAccountRegister, styles.umofreightFlexBox]}>
            New Account Register
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={[styles.welcomeBack, styles.resetClr]}>Welcome!</Text>
      <Text style={[styles.pleaseLoginTo, styles.signupButtonPosition]}>
        Please login to access your account
      </Text>

      <TextInput 
      style={[styles.pleaseLoginTo1, styles.pleaseTypo]}
      placeholder="example@umofreight.com"
      value={email}
      onChangeText={text => setEmail(text)}
      />

      <TextInput 
      style={[styles.pleaseLoginTo2, styles.pleaseTypo]}
      placeholder="****************"
      secureTextEntry={true}
      value={password}
      onChangeText={text => setPassword(text)}
      />

      <View style={[styles.loginChild1, styles.loginChild1Position]} />
      <View style={[styles.ellipseParent, styles.ellipseLayout]}>
        <Image
          style={[styles.ellipseIcon, styles.ellipseLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.support, styles.login2Position]}>SUPPORT</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <View style={styles.umofreightParent}>
          <Text style={[styles.umofreight, styles.umofreightFlexBox]}>
            <Text style={styles.umo}>UMO</Text>
            <Text style={styles.freight}>FREIGHT</Text>
          </Text>
          <Image
            style={[styles.frameChild, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/umofreight.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemLayout: {
    width: "100%",
    position: "absolute",
  },
  childPosition: {
    height: 340,
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  rectangleLayout: {
    height: 66,
    width: 312,
    left: '10%',
    position: "absolute",
  },
  loginLayout1: {
    height: 40,
    width: 312,
  },
  loginLayout: {
    borderRadius: Border.br_5xs,
    height: 40,
    width: 312,
    left: 0,
    top: 0,
    position: "absolute",
  },
  login2Position: {
    color: Color.colorWhite,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  orTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  resetClr: {
    color: Color.colorOrange,
    textAlign: "left",
    position: "absolute",
  },
  loginChild1Position: {
    top: 561,
    position: "absolute",
  },
  signupButtonPosition: {
    left: "10%",
    position: "absolute",
  },
  umofreightFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  pleaseTypo: {
    left: 45,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  ellipseLayout: {
    height: 48,
    width: 49,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 34,
    width: 265,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "rgba(0, 43, 69, 0.83)",
  },
  groupItem: {
    top: 281,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  rectangleParent: {
    height: 815,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 26,
    borderRadius: Border.br_10xs,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  email: {
    left: 1,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 385,
  },
  rectangleContainer: {
    top: 466,
  },
  loginItem: {
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_5xs,
  },
  login2: {
    marginLeft: -29,
    fontSize: FontSize.size_3xl,
    top: "50%",
    marginTop: -14,
    fontFamily: FontFamily.interRegular,
  },
  login1: {
    top: 615,
    left: "10%",
    height: 40,
    position: "absolute",
  },
  passwordForgotten: {
    left: 189,
    top: 561,
    position: "absolute",
  },
  or: {
    marginLeft: -8.5,
    top: 669,
    left: "50%",
    position: "absolute",
  },
  reset: {
    left: 310,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 561,
    color: Color.colorOrange,
    fontSize: FontSize.size_xs,
  },
  rememberMe: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rememberMeWrapper: {
    left: 60,
    width: 83,
    height: 15,
  },
  loginInner: {
    backgroundColor: Color.colorOrange,
  },
  newAccountRegister: {
    marginLeft: -116,
    color: "#494949",
    fontSize: FontSize.size_3xl,
    top: "50%",
    marginTop: -14,
    fontFamily: FontFamily.interRegular,
    left: "55%",
  },
  login3: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  signupButton: {
    top: 699,
    height: 40,
    width: 312,
  },
  welcomeBack: {
    top: 311,
    left: 35,
    fontSize: 30,
    fontFamily: FontFamily.interRegular,
    color: Color.colorOrange,
  },
  pleaseLoginTo: {
    top: 344,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  pleaseLoginTo1: {
    top: 423,
  },
  pleaseLoginTo2: {
    top: 504,
  },
  loginChild1: {
    left: 35,
    borderColor: Color.colorBlack,
    width: 14,
    height: 14,
    borderWidth: 1,
    borderStyle: "solid",
  },
  ellipseIcon: {
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "46.88%",
    width: "45.73%",
    top: "16.67%",
    right: "25.81%",
    bottom: "36.46%",
    left: "28.46%",
  },
  support: {
    marginLeft: -11.6,
    top: 32,
    fontSize: 5,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 24,
    height: 7,
  },
  ellipseParent: {
    top: 322,
    left: 319,
  },
  groupChild1: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  umo: {
    color: "#ff9800",
  },
  freight: {
    color: Color.colorDarkslategray_100,
  },
  umofreight: {
    top: 0,
    left: 23,
    fontSize: 35,
    lineHeight: 35,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameChild: {
    height: "93.1%",
    width: "10.12%",
    top: "2.76%",
    right: "92.82%",
    bottom: "4.14%",
    left: "-2.94%",
  },
  umofreightParent: {
    top: 3,
    left: 10,
    width: 252,
    height: 29,
    position: "absolute",
  },
  groupView: {
    top: 125,
    left: 55,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "visible",
    backgroundColor: Color.colorDarkslategray_100,
  },
});

export default Login;