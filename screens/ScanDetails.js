import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ScanDetails = ({ navigation, route }) => {

    const { capturedImage, date, time, location } = route.params;

    return (
        <View style={styles.scanDetails}>
            <Image
                style={styles.image1Icon}
                contentFit="cover"
                source={require("../assets/image-1.png")}
            />
            <Text style={[styles.march82023, styles.march82023Typo]}>
                {date} {time}
            </Text>
            <Text style={styles.onyankeleStreet}>{location}</Text>
            <Text style={[styles.of28, styles.of28Typo]}>14 of 28</Text>
            <Text style={[styles.totalScanned11, styles.octiconplay16Layout]}>
                Total Scanned: 11
            </Text>

            <TouchableOpacity style={[styles.vectorIcon, styles.vectorIconLayout]}>
                <Image
                    style={{ transform: [{ scale: 0.3 }] }}
                    contentFit="cover"
                    source={require("../assets/vector4.png")}
                />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.scanDetailsInner, styles.rectangleIconLayout1]} onPress={() => navigation.push('ShipmentPreview')}>
                <Image
                    style={{ transform: [{ scale: 0.3 }] }}
                    contentFit="cover"
                    source={require("../assets/rectangle-71.png")}
                />
            </TouchableOpacity>

            <Text style={styles.finish}>Finish</Text>
            

            <TouchableOpacity style={[styles.rectangleIcon, styles.rectangleIconLayout]} onPress={() => navigation.push('LiveStream')}>
            
            <Image
                style={{ transform: [{ scale: 0.3 }] }}
                contentFit="cover"
                source={require("../assets/rectangle-113.png")}
            />

            </TouchableOpacity>
            <Text style={styles.next}>NEXT</Text>

            <Text style={[styles.of281, styles.of281Typo]}>2 of 28</Text>
            <Text style={[styles.of282, styles.of281Typo]}>1 of 28</Text>
            <Text style={[styles.of283, styles.of281Typo]}>3 of 28</Text>
            <Image
                style={styles.scanDetailsChild}
                contentFit="cover"
                source={{ uri: capturedImage  }} 
            />
            <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-4961.png")}
            />
            <View style={[styles.groupParent, styles.groupParentPosition]}>
                <Image
                    style={[styles.groupChild, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group-4937.png")}
                />
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
                <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
            </View>
            <Text style={[styles.of288, styles.of288Typo]}>5 of 28</Text>
            <Text style={[styles.of289, styles.of288Typo]}>17 of 28</Text>
            <Text style={[styles.of2810, styles.of288Typo]}>13 of 28</Text>
            <View style={[styles.groupContainer, styles.groupParentPosition]}>
                <Image
                    style={[styles.groupChild, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group-4937.png")}
                />
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
                <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
            </View>
            <Text style={[styles.of2815, styles.of2815Typo]}>21 of 28</Text>
            <Text style={[styles.of2816, styles.of2815Typo]}>19 of 28</Text>
            <Text style={[styles.of2817, styles.of2815Typo]}>7 of 28</Text>
            <View style={[styles.groupParent1, styles.groupParentPosition]}>
                <Image
                    style={[styles.groupChild, styles.vectorIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group-4937.png")}
                />
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
                <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                    <Image
                        style={styles.groupItem}
                        contentFit="cover"
                        source={require("../assets/rectangle-571.png")}
                    />
                    <Image
                        style={[styles.octiconplay16, styles.octiconplay16Layout]}
                        contentFit="cover"
                        source={require("../assets/octiconplay16.png")}
                    />
                    <Image
                        style={[styles.groupInner, styles.of284Layout]}
                        contentFit="cover"
                        source={require("../assets/group-49351.png")}
                    />
                    <Text style={[styles.of285, styles.of284Typo]}>27 of 28</Text>
                </View>
            </View>
            <Text
                style={[styles.of28Scan, styles.of28Typo]}
            >{`14 of 28 scan successfully `}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    march82023Typo: {
        textAlign: "left",
        fontSize: FontSize.size_mid_4,
        color: Color.colorDarkslategray_100,
        left: "50%",
    },
    of28Typo: {
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        height: 25,
        textAlign: "left",
        fontSize: FontSize.size_mid_4,
        left: "50%",
        position: "absolute",
    },
    octiconplay16Layout: {
        height: 25,
        position: "absolute",
    },
    vectorIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "visible",
    },
    rectangleIconLayout: {
        width: 150,
        borderRadius: 10,
        bottom: "4.19%",
        top: "85.64%",
        height: "5.17%",
        maxHeight: "100%",
        left: "50%",
        position: "absolute",
        overflow: "visible"
    },

    rectangleIconLayout1: {
        width: 150,
        borderRadius: 10,
        bottom: "4.19%",
        top: "85.64%",
        height: "5.17%",
        maxHeight: "100%",
        left: "50%",
        position: "absolute",
        overflow: "visible"
    },
    of281Typo: {
        color: Color.colorDarkgray_100,
        fontSize: FontSize.size_4xs,
        marginLeft: -130.5,
        height: "2.09%",
        textAlign: "center",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        left: "50%",
        position: "absolute",
    },
    groupParentPosition: {
        bottom: "18.37%",
        top: "68.6%",
        width: "65.07%",
        height: "13.03%",
        position: "absolute",
    },
    of284Layout: {
        height: 6,
        position: "absolute",
    },
    rectangleLayout: {
        height: 29,
        width: 27,
        left: 0,
        position: "absolute",
    },
    of284Typo: {
        fontFamily: FontFamily.interRegular,
        color: Color.white,
        textAlign: "left",
        left: "50%",
    },
    of288Typo: {
        marginLeft: -27.5,
        color: Color.colorDarkgray_100,
        fontSize: FontSize.size_4xs,
        height: "2.09%",
        textAlign: "center",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        left: "50%",
        position: "absolute",
    },
    of2815Typo: {
        marginLeft: 75.5,
        color: Color.colorDarkgray_100,
        fontSize: FontSize.size_4xs,
        height: "2.09%",
        textAlign: "center",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        left: "50%",
        position: "absolute",
    },
    scanDetailsChild: {
        top: 252,
        left: 33,
        backgroundColor: Color.colorGainsboro_200,
        width: 311,
        height: 274,
        position: "absolute",
        borderRadius: 8,
    },
    scanDetailsItem: {
        top: 301,
        left: 53,
        borderRadius: Border.br_xs,
        backgroundColor: Color.colorDarkgray_200,
        borderStyle: "solid",
        borderColor: Color.colorDarkslategray_100,
        borderWidth: 1,
        width: 270,
        height: 163,
        position: "absolute",
    },
    image1Icon: {
        marginLeft: -115.5,
        top: 67,
        width: 233,
        height: 26,
        left: "50%",
        position: "absolute",
    },
    march82023: {
        marginLeft: -101.5,
        top: 121,
        width: 203,
        height: 25,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        textAlign: "left",
        fontSize: FontSize.size_mid_4,
        position: "absolute",
    },
    onyankeleStreet: {
        marginLeft: -82.5,
        top: 143,
        height: 55,
        width: 165,
        textAlign: "center",
        color: Color.colorDarkslategray_100,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_mid_4,
        left: "50%",
        position: "absolute",
    },
    of28: {
        marginLeft: -34.5,
        top: 205,
        width: 69,
        color: Color.colorDarkslategray_100,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
    },
    totalScanned11: {
        marginLeft: -71.5,
        top: 534,
        fontWeight: "600",
        fontFamily: FontFamily.interSemiBold,
        width: 149,
        textAlign: "left",
        fontSize: FontSize.size_mid_4,
        color: Color.colorDarkslategray_100,
        left: "50%",
        height: 8,
    },
    vectorIcon: {
        height: "1.6%",
        width: "2.57%",
        top: "4%",
        right: "90.05%",
        bottom: "91.48%",
        left: "1%",
    },
    scanDetailsInner: {
        marginLeft: -144,
    },
    finish: {
        marginLeft: 34.5,
        top: "91.26%",
        color: Color.colorDarkorange_100,
        width: 111,
        textAlign: "center",
        fontSize: FontSize.size_9xl_2,
        height: "4.8%",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        left: "50%",
        position: "absolute",
    },
    rectangleIcon: {
        marginLeft: -320,
    },
    next: {
        marginLeft: -144.5,
        top: "91.01%",
        color: Color.colorWhite,
        width: 111,
        textAlign: "center",
        fontSize: FontSize.size_9xl_2,
        height: "4.8%",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        left: "50%",
        position: "absolute",
    },
    of281: {
        width: 52,
        top: "69.83%",
    },
    of282: {
        width: 52,
        top: "74.14%",
    },
    of283: {
        top: "78.94%",
        width: 52,
    },
    scanDetailsChild1: {
        top: 299,
        left: 106,
        borderRadius: 4,
        height: 169,
        width: 165,
        position: "absolute",
    },
    groupIcon: {
        top: 144,
        left: 319,
        width: 40,
        height: 40,
        position: "absolute",
    },
    groupChild: {
        height: "8.51%",
        width: "3.48%",
        top: "0%",
        right: "29.3%",
        bottom: "91.49%",
        left: "67.21%",
    },
    of284: {
        marginLeft: 84,
        fontSize: FontSize.size_3xs_1,
        width: 38,
        fontFamily: FontFamily.interRegular,
        color: Color.white,
        textAlign: "left",
        left: "50%",
        top: 77,
    },
    groupItem: {
        top: 2,
        borderRadius: 1,
        width: 26,
        left: 0,
        height: 26,
        position: "absolute",
    },
    octiconplay16: {
        top: 12,
        left: 9,
        width: 8,
        overflow: "hidden",
    },
    groupInner: {
        top: 0,
        left: 21,
        width: 6,
    },
    of285: {
        marginLeft: -6.3,
        top: 25,
        fontSize: FontSize.size_10xs_7,
        width: 11,
        height: 2,
        position: "absolute",
    },
    rectangleParent: {
        top: 38,
    },
    rectangleGroup: {
        top: 1,
    },
    rectangleContainer: {
        top: 77,
    },
    groupParent: {
        right: "26.13%",
        left: "8.8%",
    },
    of288: {
        width: 42,
        top: "69.83%",
    },
    of289: {
        width: 49,
        top: "74.14%",
    },
    of2810: {
        width: 51,
        top: "78.94%",
    },
    groupContainer: {
        right: "-1.33%",
        left: "36.27%",
    },
    of2815: {
        width: 49,
        top: "69.83%",
    },
    of2816: {
        width: 49,
        top: "74.14%",
    },
    of2817: {
        top: "78.94%",
        width: 42,
    },
    groupParent1: {
        right: "-28.8%",
        left: "63.73%",
    },
    rectangleView: {
        top: 594,
        left: 342,
        borderRadius: 7,
        backgroundColor: Color.colorGainsboro_100,
        width: 5,
        height: 27,
        position: "absolute",
    },
    of28Scan: {
        marginLeft: -109.5,
        top: 699,
        color: Color.colorLimegreen,
        width: 222,
    },
    scanDetails: {
        backgroundColor: Color.white,
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
    },
});

export default ScanDetails;