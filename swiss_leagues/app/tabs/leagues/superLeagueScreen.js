import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import DetailListItem from "../../../components/LeagueDetailListItem";

const testLeagueTable = [
    { position: 1, name: "Lugano", matches: 24, won: 12, draw: 6, lost: 6, goal_diff: "+9", points: 42 },
    { position: 2, name: "Basel", matches: 24, won: 12, draw: 5, lost: 7, goal_diff: "+25", points: 41 },
    { position: 3, name: "Luzern", matches: 24, won: 11, draw: 6, lost: 7, goal_diff: "+5", points: 39 },
];

export default function SuperLeagueScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Super League - 1. Liga" }} />
            <Text style={styles.header}>Super League - 1. Liga</Text>

            <View style={styles.tableHeader}>
                <Text style={[styles.cell, styles.position]}>#</Text>
                <Text style={[styles.cell, styles.team]}>Mannschaft</Text>
                <Text style={styles.cell}>SP</Text>
                <Text style={styles.cell}>G</Text>
                <Text style={styles.cell}>U</Text>
                <Text style={styles.cell}>V</Text>
                <Text style={styles.cell}>+/-</Text>
                <Text style={[styles.cell, styles.points]}>PKT</Text>
            </View>

            <FlatList
                data={testLeagueTable}
                keyExtractor={(item) => item.position.toString()}
                renderItem={({ item }) => (
                    <DetailListItem
                        position={item.position}
                        team={item.name}
                        games={item.matches}
                        wins={item.won}
                        draws={item.draw}
                        losses={item.lost}
                        goalDiff={item.goal_diff}
                        points={item.points}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    tableHeader: {
        flexDirection: "row",
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: "#d32f2f",
    },
    cell: {
        flex: 1,
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    team: {
        flex: 2,
        textAlign: "left",
        paddingLeft: 10,
    },
    points: {
        color: "#d32f2f",
    },
});
