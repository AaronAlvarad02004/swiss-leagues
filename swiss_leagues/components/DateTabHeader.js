import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomColors from "./CustomColors";
import { useDate } from "./DateContext"; // ⬅️ useDate für den Zugriff auf `selectedDate`

export default function DateTabsHeader() {
    const { selectedDate, setSelectedDate } = useDate(); // ⬅️ Direkt aus Context holen

    const handleTabPress = (date) => {
        setSelectedDate(date);
    };

    return (
        <View style={styles.container}>
            {["Gestern", "Heute", "Morgen"].map((date) => (
                <TouchableOpacity
                    key={date}
                    style={[
                        styles.tab,
                        selectedDate === date && styles.selectedTab,
                    ]}
                    onPress={() => handleTabPress(date)}
                >
                    <Text
                        style={[
                            styles.tabText,
                            selectedDate === date && styles.selectedTabText,
                        ]}
                    >
                        {date}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 0,
        backgroundColor: CustomColors.surface,
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderColor: "transparent",
    },
    selectedTab: {
        borderColor: CustomColors.primary, // Rote Linie unter ausgewähltem Tab
    },
    tabText: {
        color: CustomColors.onSurfaceVariant,
        fontSize: 16,
    },
    selectedTabText: {
        color: CustomColors.primary, // Textfarbe für den ausgewählten Tab
        fontWeight: "bold",
    },
});

