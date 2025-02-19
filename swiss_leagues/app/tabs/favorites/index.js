import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomColors from "../../../components/CustomColors";

export default function FavoritesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favorites-Seite</Text>
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
        color: CustomColors.onSurface, // Weisse Schrift
    },
});
