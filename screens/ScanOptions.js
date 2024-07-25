import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../screens/components/CustomButton'; 
import { Color } from "../GlobalStyles";

const ScanOptions = ({ navigation }) => {
    const handlePress = async (title) => {
        await AsyncStorage.setItem('shipmentStatus', title);
        navigation.push('Scanner', { title });
    };

    return (
        <View style={styles.scanHistory}>
            <CustomButton
                title="Warehouse"
                onPress={() => handlePress('Warehouse')}
                style={{ top: 177, left: 109, height: 52, width: 176 }}
            />
            <CustomButton
                title="Container"
                onPress={() => handlePress('Container')}
                style={{ top: 277, left: 109, height: 52, width: 176 }}
            />
            <CustomButton
                title="Pickup"
                onPress={() => handlePress('Pickup')}
                style={{ top: 377, left: 109, height: 52, width: 176 }}
            />
            <CustomButton
                title="Transport"
                onPress={() => handlePress('Transport')}
                style={{ top: 477, left: 109, height: 52, width: 176 }}
            />
            <CustomButton
                title="Release"
                onPress={() => handlePress('Release')}
                style={{ top: 577, left: 109, height: 52, width: 176 }}
            />
            <CustomButton
                title="Delivery"
                onPress={() => handlePress('Delivery')}
                style={{ top: 677, left: 109, height: 52, width: 176 }}
            />

            <Image
                style={styles.image1Icon}
                contentFit="cover"
                source={require("../assets/image-1.png")}
            />

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.vectorIcon}>
                <Image
                    contentFit="cover"
                    source={require("../assets/back.png")}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image1Icon: {
        marginLeft: -116.5,
        top: 66,
        width: 233,
        height: 26,
        left: "50%",
        position: "absolute",
    },
    vectorIcon: {
        height: "1.6%",
        width: "3.57%",
        top: "6.92%",
        right: "90.05%",
        bottom: "91.48%",
        left: "6.37%",
        maxWidth: "100%",
        overflow: "visible",
        position: "absolute",
    },
    scanHistory: {
        backgroundColor: Color.colorGray_100,
        flex: 1,
        height: 812,
        overflow: "hidden",
        width: "100%",
    },
});

export default ScanOptions;
