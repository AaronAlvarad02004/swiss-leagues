import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import DetailListItem from "../../../components/LeagueDetailListItem";

export default function SuperLeagueScreen() {
    const [leagueTable, setLeagueTable] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeagueData = async () => {
            try {
                const response = await fetch(
                    "https://livescore-api.com/api-client/competitions/table.json?competition_id=15&key=QWThEjLbmWGzTcKH&secret=8rwcWaD9vvrudbm37glLz6XW3EwXQhFZ"
                );

                const data = await response.json();

                // ✅ Extrahiere die korrekten Daten aus der API
                const standings = data?.data?.stages[0]?.groups[0]?.standings || [];
                setLeagueTable(standings);
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeagueData();
    }, []);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Super League",
                    headerBackTitle: "Back",
                }}
            />
            <Text style={styles.header}>Super League - 1. Liga</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#d32f2f" />
            ) : (
                <>
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
                        data={leagueTable}
                        keyExtractor={(item) => item.team.id.toString()}
                        renderItem={({ item }) => (
                            <DetailListItem
                                position={item.rank}
                                team={item.team.name}
                                games={item.matches}
                                wins={item.won}
                                draws={item.drawn}
                                losses={item.lost}
                                goalDiff={item.goal_diff}
                                points={item.points}
                            />
                        )}
                    />
                </>
            )}
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
