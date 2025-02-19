import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomColors from "../../../components/CustomColors";
import { useDate } from "../../../components/DateContext"; // ⬅️ useDate importieren

export default function MatchesScreen() {
    const { selectedDate } = useDate(); // ⬅️ Datum aus dem Context holen

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {`Zeige Spiele für: ${selectedDate}`}
            </Text>
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
