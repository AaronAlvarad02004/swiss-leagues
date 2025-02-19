import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomColors from "../../../components/CustomColors";

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings-Seite</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CustomColors.backgroundColor, // Schwarzer Hintergrund
        padding: 16,
    },
    text: {
        color: CustomColors.onSurface, // Weiße Schrift
    },
});
