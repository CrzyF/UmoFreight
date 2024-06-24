import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ShipmentPreview = ({navigation}) => {
  return (
    <View style={styles.delayedPackages}>
      <Text style={[styles.scannedPreview, styles.submitFlexBox]}>
        Scanned Preview
      </Text>
      <View style={[styles.phtruckBoldParent, styles.groupLayout]}>
        <View style={styles.phtruckBold} />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Text style={[styles.locatedLondon, styles.locatedLayout]}>
          Located : London, UK
        </Text>
        <Text style={[styles.expectedArrival, styles.expectedPosition]}>
          Expected Arrival - March 8 / 9:59 AM
        </Text>
        <Text style={[styles.of28, styles.of28Typo]}>3 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.phtruckBoldGroup, styles.groupLayout]}>
        <View style={styles.phtruckBold} />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Text style={[styles.locatedLondon, styles.locatedLayout]}>
          Located : London, UK
        </Text>
        <Text style={[styles.expectedArrival, styles.expectedPosition]}>
          Expected Arrival - March 8 / 9:59 AM
        </Text>
        <Text style={[styles.of28, styles.of28Typo]}>7 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.phtruckBoldContainer, styles.groupLayout]}>
        <View style={styles.phtruckBold} />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Text style={[styles.locatedLondon, styles.locatedLayout]}>
          Located : London, UK
        </Text>
        <Text style={[styles.expectedArrival, styles.expectedPosition]}>
          Expected Arrival - March 8 / 9:59 AM
        </Text>
        <Text style={[styles.of28, styles.of28Typo]}>9 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.phtruckBold} />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Text style={[styles.locatedMarrakech, styles.locatedLayout]}>
          Located : Marrakech, Morroco
        </Text>
        <Text style={[styles.expectedArrival3, styles.expectedPosition]}>
          Expected Arrival - March 13 / 9:59 AM
        </Text>
        <Text style={[styles.of28, styles.of28Typo]}>5 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.phtruckBold} />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Text style={[styles.locatedMarrakech, styles.locatedLayout]}>
          Located : Marrakech, Morroco
        </Text>
        <Text style={[styles.expectedArrival3, styles.expectedPosition]}>
          Expected Arrival - March 13 / 9:59 AM
        </Text>
        <Text style={[styles.of28, styles.of28Typo]}>5 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.inputDropdown, styles.inputLayout]}>
        <View style={[styles.inputDropdownBase, styles.inputLayout]}>
          <View style={styles.inputFlexBox1}>
            <View style={[styles.input, styles.inputFlexBox]}>
              <View style={[styles.content, styles.inputFlexBox]}>
                <Image
                  style={styles.searchIcon}
                  contentFit="cover"
                  source={require("../assets/search.png")}
                />
                <TextInput
                     style={styles.text}
                    placeholder="Search by name / transaction ID"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.umofreightAutoTracker, styles.submitFlexBox]}>
        UmoFreight Auto Tracker
      </Text>

      <TouchableOpacity style={styles.delayedPackagesChild} onPress={() => navigation.push('ScanHistory')}>
      <Image
        style={{ transform: [{ scale: 0.3 }] }}  
        contentFit="cover"
        source={require("../assets/rectangle-72.png")}
      />
      </TouchableOpacity>

      <Text style={[styles.submit, styles.submitFlexBox]}>SUBMIT</Text>

      <Text style={[styles.of285, styles.of28Typo]}>28 of 28</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  submitFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupLayout: {
    height: 90,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  locatedLayout: {
    height: 18,
    color: Color.colorBlack,
  },
  expectedPosition: {
    top: 62,
    height: 18,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    left: 84,
    position: "absolute",
  },
  of28Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  inputLayout: {
    height: 34,
    position: "absolute",
  },
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  scannedPreview: {
    marginLeft: -123.5,
    top: 111,
    fontSize: 27,
    height: 67,
    width: 247,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
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
    width: 344,
    height: 90,
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
    width: 158,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 84,
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_sm,
    top: 38,
  },
  expectedArrival: {
    width: 247,
  },
  of28: {
    top: 17,
    left: 259,
    width: 49,
    height: 18,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
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
  phtruckBoldParent: {
    top: 256,
    width: 353,
    left: 15,
    height: 90,
  },
  phtruckBoldGroup: {
    top: 362,
    width: 353,
    left: 15,
    height: 90,
  },
  phtruckBoldContainer: {
    top: 468,
    width: 353,
    left: 15,
    height: 90,
  },
  locatedMarrakech: {
    width: 204,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 84,
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_sm,
    top: 38,
  },
  expectedArrival3: {
    width: 260,
  },
  groupView: {
    top: 574,
    width: 353,
    left: 15,
    height: 90,
  },
  searchIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  text: {
    fontSize: 13,
    lineHeight: 13,
    color: Color.colorGray_200,
    marginLeft: 7.8,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  content: {
    flex: 1,
  },
  input: {
    borderRadius: 8,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignSelf: "stretch",
    height: 34,
  },
  inputFlexBox1: {
    alignSelf: "stretch",
    height: 34,
  },
  inputDropdownBase: {
    right: 0,
    left: 0,
    top: 0,
  },
  inputDropdown: {
    top: 197,
    left: 12,
    width: 344,
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
    left: "50%",
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