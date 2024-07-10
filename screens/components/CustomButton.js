import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Color, FontFamily } from "../../GlobalStyles";

const CustomButton = ({ title, style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
            <View style={styles.button}>
                <View style={styles.buttonBackground} />
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: 73,
        width: 197,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    buttonBackground: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 17,
        backgroundColor: Color.colorDarkorange_100,
    },
    buttonText: {
        color: Color.colorWhite,
        fontFamily: FontFamily.interRegular,
        fontSize: 28,
    },
});

export default CustomButton;
