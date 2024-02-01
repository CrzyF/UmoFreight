import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

import ScanItem from "./components/ScanItem";

const ScanHistory = ({navigation}) => {
    const [search, setSearch] = useState('');
  return (
    <View style={styles.scanHistory}>
      <Text style={styles.umofreightTrackingWill}>
        UmoFreight tracking will keep 10 days history to keep all your scan
        history
      </Text>
      <View style={[styles.phtruckBoldParent, styles.groupParentLayout]}>
        <View style={styles.phtruckBold} />
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.swivelChair, styles.qtyTypo1]}>Swivel Chair</Text>
        <Text style={styles.inTransit}> In-Transit</Text>
        <Text style={[styles.today1009, styles.today1009Position]}>
           Today @ 10:09
        </Text>
        <Text style={[styles.qty, styles.qtyTypo]}>10 Qty</Text>
        <Text style={[styles.ty39yuh980ydgihcc, styles.textTypo]}>
          45TY39YUH980YDGIHCC
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/track.png")}
      />
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/track.png")}
        />
        <Text
          style={[styles.fri081223, styles.today1009Position]}
        >{`Fri 08/12/23 - `}</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-611.png")}
        />
        <Text style={[styles.swivelChair, styles.qtyTypo1]}>Swivel Chair</Text>
        <Text style={styles.inTransit}> In-Transit</Text>
        <Text style={[styles.ty39yuh980ydgihcc, styles.textTypo]}>
          45TY39YUH980YDGIHCC
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/track.png")}
        />
        <Text style={[styles.today1009, styles.today1009Position]}>
           Today @ 10:09
        </Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-612.png")}
        />
        <Text style={[styles.swivelChair, styles.qtyTypo1]}>Swivel Chair</Text>
        <Text style={[styles.inTransit2, styles.inTransit2Position]}>
          In-Transit
        </Text>
        <Text style={[styles.ty39yuh980ydgihcc, styles.textTypo]}>
          45TY39YUH980YDGIHCC
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/track.png")}
        />
        <Text style={[styles.today1009, styles.today1009Position]}>
           Today @ 10:09
        </Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Text style={[styles.swivelChair, styles.qtyTypo1]}>Swivel Chair</Text>
        <Text style={[styles.inTransit2, styles.inTransit2Position]}>
          In-Transit
        </Text>
        <Text style={[styles.ty39yuh980ydgihcc, styles.textTypo]}>
          45TY39YUH980YDGIHCC
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/track.png")}
        />
        <Text style={[styles.today1009, styles.today1009Position]}>
           Today @ 10:09
        </Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/rectangle-612.png")}
        />
        <Text style={[styles.swivelChair, styles.qtyTypo1]}>Swivel Chair</Text>
        <Text style={[styles.inTransit2, styles.inTransit2Position]}>
          In-Transit
        </Text>
        <Text style={[styles.ty39yuh980ydgihcc, styles.textTypo]}>
          45TY39YUH980YDGIHCC
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
                style={[styles.text, styles.textTypo]}
                placeholder="Search by name"
                value={search}
                onChangeText={text => setSearch(text)}/>
              </View>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={[styles.skipWrapper, styles.skipPosition1]}>
        <View style={[styles.skip, styles.skipPosition]}>
          <View style={styles.skipChild} />
          <Text style={[styles.makePayment, styles.scanPosition]}>
            Make Payment
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.skipContainer, styles.skipPosition]}>
        <View style={[styles.skip, styles.skipPosition]}>
          <View style={styles.skipChild} />
          <Text style={[styles.serviceRequest, styles.scanPosition]}>
            Service Request
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('ScanOptions')} style={[styles.skipFrame, styles.skipPosition1]}>
        <View style={[styles.skip, styles.skipPosition]}>
          <View style={styles.skipChild} />
          <Text style={[styles.scan, styles.scanPosition]}>{`Scan `}</Text>
          <Image
            style={styles.bxqrScanIcon}
            contentFit="cover"
            source={require("../assets/bxqrscan.png")}
          />
        </View>
      </TouchableOpacity>

      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 90,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  qtyTypo1: {
    height: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 15,
    position: "absolute",
  },
  today1009Position: {
    left: 152,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 39,
    height: 18,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  qtyTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  textTypo: {
    textAlign: "left",
    fontSize: 13,
  },
  inTransit2Position: {
    left: 86,
    fontFamily: FontFamily.interRegular,
    height: 18,
    color: Color.colorDarkorange_100,
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
    top: 195,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  skipPosition: {
    marginLeft: -46.5,
    width: 93,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  scanPosition: {
    color: Color.colorWhite,
    top: "50%",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  umofreightTrackingWill: {
    marginLeft: -134.5,
    top: 118,
    color: Color.colorDarkgray,
    width: 269,
    height: 32,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 13,
    left: "50%",
    position: "absolute",
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
    top: 18,
    left: 14,
    borderRadius: 17,
    height: 61,
    width: 67,
    position: "absolute",
  },
  vectorIcon: {
    width: "4.82%",
    right: "8.78%",
    left: "86.4%",
    bottom: "64.11%",
    top: "18.89%",
    height: "17%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  swivelChair: {
    left: 84,
    fontSize: 15,
    width: 97,
    textAlign: "center",
  },
  inTransit: {
    left: 82,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 39,
    height: 18,
    color: Color.colorDarkorange_100,
    width: 67,
    textAlign: "center",
    position: "absolute",
  },
  today1009: {
    width: 111,
  },
  qty: {
    left: 185,
    width: 44,
    height: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 15,
    position: "absolute",
  },
  ty39yuh980ydgihcc: {
    top: 63,
    width: 170,
    left: 86,
    fontFamily: FontFamily.interRegular,
    height: 18,
    color: Color.colorBlack,
    position: "absolute",
  },
  phtruckBoldParent: {
    top: 327,
    width: 353,
    left: 15,
  },
  vectorIcon1: {
    height: "1.88%",
    width: "5.76%",
    top: "40.36%",
    right: "18.51%",
    bottom: "55.75%",
    left: "72.73%",
  },
  vectorIcon2: {
    width: "4.94%",
    right: "5.52%",
    left: "89.53%",
    bottom: "64.11%",
    top: "18.89%",
    height: "17%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    width: "6.28%",
    right: "14.65%",
    left: "79.07%",
    bottom: "64.11%",
    top: "18.89%",
    height: "17%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  fri081223: {
    width: 100,
  },
  rectangleParent: {
    top: 429,
    width: 344,
    left: 15,
  },
  inTransit2: {
    width: 63,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 39,
    left: 86,
  },
  rectangleGroup: {
    top: 533,
    width: 344,
    left: 15,
  },
  rectangleContainer: {
    top: 633,
    width: 344,
    left: 15,
  },
  groupView: {
    top: 734,
    width: 344,
    left: 15,
  },
  searchIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  text: {
    lineHeight: 14,
    color: "rgba(0, 0, 0, 0.25)",
    marginLeft: 7.77,
    fontFamily: FontFamily.poppinsRegular,
  },
  content: {
    flex: 1,
  },
  input: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#d0d5dd",
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
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
    top: 268,
    width: 344,
    left: 15,
  },
  skipChild: {
    height: "71.22%",
    top: "13.66%",
    right: "0%",
    bottom: "15.12%",
    left: "0%",
    backgroundColor: '#012b45',
    borderRadius: 8,
    position: "absolute",
    width: "100%",
  },
  makePayment: {
    marginLeft: -39.5,
    fontSize: 11,
    width: 80,
    height: 16,
    marginTop: -7.2,
    top: "50%",
  },
  skip: {
    top: 0,
  },
  skipWrapper: {
    marginLeft: -172.5,
  },
  serviceRequest: {
    marginLeft: -41.5,
    fontSize: 10,
    width: 83,
    height: 14,
    marginTop: -7.2,
    top: "50%",
  },
  skipContainer: {
    top: 195,
    marginLeft: -46.5,
  },
  scan: {
    marginTop: -9.2,
    marginLeft: -30.5,
    fontSize: 14,
    width: 37,
    height: 19,
  },
  bxqrScanIcon: {
    top: 9,
    left: 58,
    width: 17,
    height: 17,
    position: "absolute",
    overflow: "hidden",
  },
  skipFrame: {
    marginLeft: 78.5,
  },
  image1Icon: {
    marginLeft: -116.5,
    top: 66,
    width: 233,
    height: 26,
    left: "50%",
    position: "absolute",
  },
  scanHistory: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ScanHistory;