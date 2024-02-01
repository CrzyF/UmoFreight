import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FreightForwarder = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [countrycode, setCountrycode] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');
  const [appKey, setAppKey] = useState('');

  const handleRegister = () => {
    const raw = JSON.stringify({
      email: email,
      country: country,
      firstname: firstname,
      lastname: lastname,
      telephone: telephone,
      password: password,
      confirmpassword: confirmpassword,
      countrycode: countrycode,
      dateofbirth: dateofbirth,
      appKey: appKey,
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    };

    fetch('https://umopay.com/api/v1/register/individual', requestOptions)
      .then(response => response.text())
      .then(result => {
        // Handle the result or response accordingly
        console.log(result);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.registrationForm}>
      <Image
        style={styles.registrationPosition}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      />
      <View
        style={[styles.registrationFormItem, styles.registrationPosition]}
      />
      <View style={[styles.registrationFormInner, styles.groupChild4Bg]} />
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.whereDoYou, styles.signUpTypo]}>
          Where do you live ?
        </Text>
      </View>

      <TextInput style={[styles.pleaseFillThe1, styles.pleaseTypo]}
        placeholder="Enter country here"
        value={country}
        onChangeText={text => setCountry(text)}
      />

      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.whereDoYou, styles.signUpTypo]}>First name</Text>
      </View>

      <TextInput style={[styles.pleaseFillThe2, styles.pleaseTypo]}
         placeholder="John"
         value={firstname}
         onChangeText={text => setFirstname(text)}
      />
      
      <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.whereDoYou, styles.signUpTypo]}>Last name</Text>
      </View>

      <TextInput style={[styles.pleaseFillThe3, styles.pleaseTypo]}
         placeholder="Doe"
         value={lastname}
         onChangeText={text => setLastname(text)}
      />

      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.whereDoYou, styles.signUpTypo]}>Email</Text>
      </View>

      <TextInput style={[styles.pleaseFillThe4, styles.pleaseTypo]}
         placeholder="example@umofreight.com"
         value={email}
         onChangeText={text => setEmail(text)}
      />

      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.whereDoYou, styles.signUpTypo]}>Telephone</Text>
      </View>

      <TextInput style={[styles.pleaseFillThe5, styles.pleaseTypo]}
         placeholder="0548713652"
         value={telephone}
         onChangeText={text => setTelephone(text)}
      />

      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.whereDoYou, styles.signUpTypo]}>Password</Text>
      </View>

      <TextInput style={[styles.pleaseFillThe6, styles.pleaseTypo]}
         placeholder="****************"
         secureTextEntry={true}
         value={password}
         onChangeText={text => setPassword(text)}
      />

      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.whereDoYou, styles.signUpTypo]}>
          Confirm Password
        </Text>
      </View>

      <TextInput style={[styles.pleaseFillThe7, styles.pleaseTypo]}
         placeholder="****************"
         secureTextEntry={true}
         value={confirmpassword}
         onChangeText={text => setConfirmpassword(text)}
      />

      <TouchableOpacity onPress={handleRegister} style={[styles.login, styles.groupLayout]}>
        <View style={[styles.loginChild, styles.groupChildBorder]} />
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      </TouchableOpacity>
      
      <Text style={[styles.individualRegistration, styles.signUpTypo]}>
        Freight Forwarder Registration!
      </Text>
      <Text style={styles.pleaseFillThe}>
        Please fill the form to create your account
      </Text>


      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-34.png")}
      />
      </TouchableOpacity>

      <View style={[styles.rectangleParent4, styles.groupChild4Layout]}>
        <View style={[styles.groupChild4, styles.groupChild4Layout]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  registrationPosition: {
    height: 340,
    left: 0,
    width: "100%",
    top: 0,
    position: "absolute",
  },
  groupChild4Bg: {
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  rectanglePosition: {
    width: 312,
    left: 32,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 312,
    position: "absolute",
  },
  signUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 61,
    width: 312,
    left: 32,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  pleaseTypo: {
    left: 42,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
    width: 300
  },
  groupChild4Layout: {
    height: 27,
    width: 211,
    position: "absolute",
  },
  registrationFormItem: {
    backgroundColor: Color.colorDarkslategray_200,
  },
  registrationFormInner: {
    top: 147,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChild: {
    top: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_10xs,
    height: 40,
    left: 0,
  },
  whereDoYou: {
    left: 1,
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    top: 0,
  },
  rectangleParent: {
    top: 226,
    height: 60,
  },
  groupItem: {
    top: 18,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_10xs,
    height: 40,
    left: 0,
  },
  rectangleGroup: {
    top: 296,
    height: 58,
  },
  groupInner: {
    top: 21,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_10xs,
    height: 40,
    left: 0,
  },
  rectangleContainer: {
    top: 364,
  },
  groupView: {
    top: 435,
  },
  rectangleParent1: {
    top: 506,
  },
  rectangleParent2: {
    top: 577,
  },
  rectangleParent3: {
    top: 648,
  },
  loginChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorDarkslategray_100,
  },
  signUp: {
    top: "32.5%",
    left: "43.27%",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  login: {
    top: 725,
    left: 33,
  },
  individualRegistration: {
    top: 165,
    left: 31,
    fontSize: FontSize.size_6xl,
    color: Color.colorOrange,
  },
  pleaseFillThe: {
    top: 203,
    left: 33,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  pleaseFillThe1: {
    top: 258,
  },
  pleaseFillThe2: {
    top: 326,
  },
  pleaseFillThe3: {
    top: 398,
  },
  pleaseFillThe4: {
    top: 468,
  },
  pleaseFillThe5: {
    top: 539,
  },
  pleaseFillThe6: {
    top: 610,
  },
  pleaseFillThe7: {
    top: 681,
  },
  groupIcon: {
    top: 53,
    left: 18,
    width: 43,
    height: 41,
    position: "absolute",
  },
  groupChild4: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  umo: {
    color: Color.colorDarkorange_200,
  },
  freight: {
    color: Color.colorDarkslategray_100,
  },
  umofreight: {
    top: 0,
    left: 17,
    fontSize: 28,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    height: "93.07%",
    width: "10.12%",
    top: "3.03%",
    right: "92.82%",
    bottom: "3.9%",
    left: "-2.94%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  umofreightParent: {
    top: 3,
    left: 8,
    width: 201,
    height: 23,
    position: "absolute",
  },
  rectangleParent4: {
    top: 58,
    left: 82,
  },
  registrationForm: {
    flex: 1,
    height:"100%",
    overflow: "visible",
    width: "100%",
    backgroundColor: Color.colorDarkslategray_100,
  },
});

export default FreightForwarder;