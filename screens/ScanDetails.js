import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ScanDetails = ({ navigation, route }) => {
    const [scannedItems, setScannedItems] = useState([]);

    useEffect(() => {
        if (route.params) {
            const { capturedImage, date, time, location, scannedData } = route.params;
            const newScan = { capturedImage, date, time, location, scannedData };
            setScannedItems(prevItems => [...prevItems, newScan]);
        }
    }, [route.params]);

    const handleNext = () => {
        navigation.push('Scanner', { scannedItems });
    };

    const handleFinish = () => {
        navigation.push('ShipmentPreview', { scannedItems });
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.thumbnailContainer}>
            <Image
                style={styles.thumbnail}
                source={{ uri: item.capturedImage }}
            />
            <Text style={styles.thumbnailText}>{item.date} {item.time}</Text>
            <Text style={styles.thumbnailText}>{item.location}</Text>
            <Text style={styles.thumbnailText}>{index + 1} of {scannedItems.length}</Text>
        </View>
    );

    return (
        <View style={styles.scanDetails}>
            <FlatList
                data={scannedItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.listContainer}
            />

            <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.finishButton]} onPress={handleFinish}>
                <Text style={styles.buttonText}>FINISH</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    scanDetails: {
        backgroundColor: Color.white,
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
    },
    listContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    thumbnailContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    thumbnailText: {
        textAlign: "center",
        fontSize: FontSize.size_mid_4,
        color: Color.colorDarkslategray_100,
        marginTop: 5,
    },
    button: {
        width: 150,
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
    },
    nextButton: {
        left: 20,
        backgroundColor: Color.colorDarkorange_100,
    },
    finishButton: {
        right: 20,
        backgroundColor: Color.colorLimegreen,
    },
    buttonText: {
        color: Color.white,
        fontSize: FontSize.size_mid_4,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
    },
});

export default ScanDetails;
