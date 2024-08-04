import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ScanDetails = ({ navigation, route }) => {
    const [scannedItems, setScannedItems] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const getItems = async () => {
            const data = await AsyncStorage.getItem("scannedData");
            const allData = JSON.parse(data);
            setScannedItems(allData);
        };
        getItems();
    }, []);

    const handleNext = () => {
        navigation.push('Scanner', { scannedItems });
    };

    const handleFinish = async () => {
        const locationReference = inputText || 'N/A'; // Default to a string if empty

        // Add locationReference to each scanned item
        const updatedScannedItems = scannedItems.map(item => ({
            ...item,
            locationReference: locationReference,
        }));

        console.log(updatedScannedItems)

        // Save the updated scannedItems
        await AsyncStorage.setItem("scannedData", JSON.stringify(updatedScannedItems));

        navigation.push('ShipmentPreview', { updatedScannedItems });
    };

    const handleClear = async () => {
        try {
            await AsyncStorage.clear();
            navigation.push('ScanOptions');
        } catch (error) {
            console.error('Failed to clear AsyncStorage:', error);
        }
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemImage}
                source={{ uri: item.capturedImage }}
            />
            <Text style={styles.itemText}>{index + 1} of {scannedItems.length}</Text>
        </View>
    );

    const lastScannedItem = scannedItems.length > 0 ? scannedItems[scannedItems.length - 1] : null;

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.innerContainer}>
                <Image
                    style={styles.image1Icon}
                    contentFit="cover"
                    source={require("../assets/image-1.png")}
                />

                {lastScannedItem && (
                    <>
                        <Text style={[styles.march82023, styles.march82023Typo]}>
                            {lastScannedItem.date} {lastScannedItem.time}
                        </Text>
                    </>
                )}

                <Text style={styles.onyankeleStreet}>{scannedItems.shipmentStatus}</Text>

                <Text style={styles.of28}>{scannedItems.length} of {scannedItems.length}</Text>

                <View style={styles.totalScannedContainer}>
                    <Text style={styles.totalScanned11}>Total Scanned: {scannedItems.length}</Text>
                    <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                        <Text style={styles.clearButtonText}>CLEAR</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={scannedItems}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    contentContainerStyle={styles.listContainer}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Enter additional information"
                    value={inputText}
                    onChangeText={setInputText}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.finishButton]} onPress={handleFinish}>
                        <Text style={styles.buttonText}>FINISH</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    march82023Typo: {
        textAlign: "left",
        fontSize: FontSize.size_mid_4,
        color: Color.colorDarkslategray_100,
        left: "50%",
    },
    march82023: {
        marginLeft: "-30%",
        top: 121,
        width: 303,
        height: 25,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        textAlign: "center",
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20, // Added paddingTop to space out buttons from other content
        marginBottom: 20,
    },
    button: {
        width: 150,
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    nextButton: {
        backgroundColor: "#F79520",
    },
    finishButton: {
        backgroundColor: Color.colorLimegreen,
    },
    buttonText: {
        color: Color.colorWhite,
        fontSize: FontSize.size_mid_4,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
    },
    image1Icon: {
        width: 233,
        height: 26,
        borderRadius: 8,
        alignSelf: 'center',
        marginVertical: 70,
    },
    of28: {
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        fontSize: FontSize.size_mid_4,
        color: Color.colorLimegreen,
        textAlign: "center",
        marginTop: 50,
    },
    totalScannedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
        marginBottom: 20,
    },
    totalScanned11: {
        color: Color.colorDarkslategray_100,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        fontSize: FontSize.size_mid_4,
        marginRight: 10,
    },
    clearButton: {
        backgroundColor: "#002B45",
        borderRadius: 10,
        padding: 10,
        marginLeft: 160
    },
    clearButtonText: {
        color: Color.colorWhite,
        fontSize: FontSize.size_mid_4,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
    },
    listContainer: {
        paddingVertical: 10,
    },
    itemContainer: {
        alignItems: 'center',
        marginRight: 10,
    },
    itemImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    itemText: {
        marginTop: 5,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        color: Color.colorDarkgray_100,
        fontSize: FontSize.size_4xs,
    },
    textInput: {
        width: '95%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
});

export default ScanDetails;