import * as React from "react";
import { Text, StyleSheet, View, Image, TextInput } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Status = ({navigation}) => {
  return (
    <View style={styles.delayedPackages}>
      <Text style={[styles.shipmentStatus, styles.shipmentStatusTypo]}>
        Shipment Status
      </Text>
      <View style={[styles.phtruckBoldParent, styles.groupLayout]}>
        <View style={[styles.phtruckBold, styles.skipItemLayout]} />
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
        <Text style={[styles.of28, styles.locatedLayout]}>3 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.phtruckBoldGroup, styles.groupLayout]}>
        <View style={[styles.phtruckBold, styles.skipItemLayout]} />
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
        <Text style={[styles.of28, styles.locatedLayout]}>7 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.phtruckBoldContainer, styles.groupLayout]}>
        <View style={[styles.phtruckBold, styles.skipItemLayout]} />
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
        <Text style={[styles.of28, styles.locatedLayout]}>9 of 28</Text>
        <Text style={[styles.ty39yuh980ydgifgg, styles.locatedLayout]}>
          45TY39YUH980YDGIFGG
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.phtruckBold, styles.skipItemLayout]} />
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
        <Text style={[styles.of28, styles.locatedLayout]}>5 of 28</Text>
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
                    placeholder="Search by name, transaction ID"
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
      <View style={[styles.groupParent, styles.inputLayout]}>
        <View style={[styles.skipWrapper, styles.skipPosition1]}>
          <View style={[styles.skip, styles.skipPosition1]}>
            <View style={[styles.skipChild, styles.skipPosition]} />
            <Text style={[styles.onTime, styles.onTimePosition]}>On Time</Text>
            <Image
              style={[styles.skipItem, styles.skipItemLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-48.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>{`24 `}</Text>
          </View>
        </View>
        <View style={[styles.skipContainer, styles.skipPosition1]}>
          <View style={[styles.skip, styles.skipPosition1]}>
            <View style={[styles.skipInner, styles.skipPosition]} />
            <Text style={[styles.delayed, styles.onTimePosition]}>Delayed</Text>
            <Image
              style={[styles.skipItem, styles.skipItemLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-481.png")}
            />
            <Text style={[styles.text2, styles.textTypo]}>{`4 `}</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.umofreightAutoTracker, styles.shipmentStatusTypo]}>
        UmoFreight Auto Tracker
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shipmentStatusTypo: {
    textAlign: "center",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 90,
    position: "absolute",
  },
  skipItemLayout: {
    height: 12,
    width: 12,
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  locatedLayout: {
    height: 18,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
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
  inputLayout: {
    height: 34,
    position: "absolute",
  },
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  skipPosition1: {
    width: 93,
    height: 34,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  skipPosition: {
    left: "0%",
    bottom: "15.12%",
    right: "0%",
    top: "13.66%",
    height: "71.22%",
    position: "absolute",
    width: "100%",
  },
  onTimePosition: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "50%",
    marginTop: -7.2,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    height: 19,
    width: 9,
    fontSize: FontSize.size_6xs_4,
    top: -2,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  shipmentStatus: {
    marginLeft: -113.5,
    top: 111,
    fontSize: FontSize.size_8xl_2,
    width: 226,
    height: 67,
    left: "50%",
  },
  phtruckBold: {
    left: 341,
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
    fontFamily: FontFamily.interRegular,
    left: 84,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    top: 38,
  },
  expectedArrival: {
    width: 247,
  },
  of28: {
    top: 17,
    left: 259,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 49,
    fontSize: FontSize.size_sm,
  },
  ty39yuh980ydgifgg: {
    fontSize: FontSize.size_sm_5,
    width: 170,
    fontFamily: FontFamily.interRegular,
    left: 84,
    color: Color.colorBlack,
    top: 18,
  },
  phtruckBoldParent: {
    top: 327,
    width: 353,
    left: 15,
    height: 90,
  },
  phtruckBoldGroup: {
    top: 433,
    width: 353,
    left: 15,
    height: 90,
  },
  phtruckBoldContainer: {
    top: 539,
    width: 353,
    left: 15,
    height: 90,
  },
  locatedMarrakech: {
    width: 204,
    fontFamily: FontFamily.interRegular,
    left: 84,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    top: 38,
  },
  expectedArrival3: {
    width: 260,
  },
  groupView: {
    top: 645,
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
    fontSize: FontSize.size_smi_6,
    lineHeight: 18,
    color: Color.colorGray_200,
    marginLeft: 7.8,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderRadius: 8,
    backgroundColor: Color.white,
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
  skipChild: {
    backgroundColor: "rgba(247, 149, 32, 0.5)",
  },
  onTime: {
    marginLeft: -39.5,
    fontSize: 11,
    width: 80,
    height: 16,
  },
  skipItem: {
    left: 79,
  },
  text1: {
    left: 81,
  },
  skip: {
    marginLeft: -46.5,
  },
  skipWrapper: {
    marginLeft: -93,
  },
  skipInner: {
    backgroundColor: Color.colorDarkorange_100,
  },
  delayed: {
    marginLeft: -41.5,
    fontSize: 10,
    width: 83,
    height: 14,
  },
  text2: {
    left: 80,
  },
  skipContainer: {
    marginLeft: 0,
  },
  groupParent: {
    marginLeft: -93.5,
    top: 262,
    width: 186,
    left: "50%",
  },
  umofreightAutoTracker: {
    top: 145,
    left: 53,
    fontSize: FontSize.size_smi,
    width: 269,
    height: 32,
  },
  delayedPackages: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Status;