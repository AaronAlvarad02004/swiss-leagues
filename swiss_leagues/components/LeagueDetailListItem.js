import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailListItem({ position, team, games, wins, draws, losses, goalDiff, points }) {
    return (
        <View style={styles.row}>
            <Text style={[styles.cell, styles.position]}>{position}</Text>
            <Text style={[styles.cell, styles.team]}>{team}</Text>
            <Text style={styles.cell}>{games}</Text>
            <Text style={styles.cell}>{wins}</Text>
            <Text style={styles.cell}>{draws}</Text>
            <Text style={styles.cell}>{losses}</Text>
            <Text style={styles.cell}>{goalDiff}</Text>
            <Text style={[styles.cell, styles.points]}>{points}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
    },
    cell: {
        flex: 1,
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
    },
    position: {
        fontWeight: "bold",
    },
    team: {
        flex: 2, // Teamname breiter machen
        textAlign: "left",
        paddingLeft: 10,
    },
    points: {
        fontWeight: "bold",
        color: "#d32f2f",
    },
});
