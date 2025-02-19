import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomColors from "../../../components/CustomColors";

export default function LeaguesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Leagues-Seite</Text>
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
