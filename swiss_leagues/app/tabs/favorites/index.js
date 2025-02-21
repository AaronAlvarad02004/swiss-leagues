import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomColors from "../../../components/CustomColors";
import FavoritesAddButton from "../../../components/FavoritesAddButton";

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem("favorites");
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            } else {
                setFavorites([]);
            }
        } catch (error) {
            console.error("Fehler beim Laden der Favoriten:", error);
        }
    };

    const removeFavorite = async (teamId) => {
        try {
            let storedFavorites = await AsyncStorage.getItem("favorites");
            let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

            favorites = favorites.filter((fav) => fav.id !== teamId);

            await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
            setFavorites(favorites);
        } catch (error) {
            console.error("Fehler beim Entfernen des Favoriten:", error);
        }
    };

    const confirmRemoveFavorite = (team) => {
        Alert.alert(
            "Favoriten entfernen",
            `Möchtest du ${team.name} wirklich aus deinen Favoriten entfernen?`,
            [
                { text: "Abbrechen", style: "cancel" },
                {
                    text: "Entfernen",
                    style: "destructive",
                    onPress: () => removeFavorite(team.id),
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <FavoritesAddButton updateFavorites={loadFavorites} />

            {favorites.length === 0 ? (
                <Text style={styles.noFavoritesText}>Keine Favoriten vorhanden</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.teamContainer}>
                            <Image source={{ uri: item.logo }} style={styles.teamLogo} />
                            <Text style={styles.teamName}>{item.name}</Text>
                            <TouchableOpacity style={styles.removeButton} onPress={() => confirmRemoveFavorite(item)}>
                                <Text style={styles.removeButtonText}>✖</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CustomColors.backgroundColor,
        padding: 16,
    },
    noFavoritesText: {
        color: CustomColors.onSurface,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    teamContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: CustomColors.surfaceVariant,
        padding: 10,
        borderRadius: 8,
    },
    teamLogo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    teamName: {
        fontSize: 16,
        color: CustomColors.onSurfaceVariant,
        flex: 1,
    },
    removeButton: {
        backgroundColor: "red",
        padding: 8,
        borderRadius: 20,
    },
    removeButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
