import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import CustomColors from "./CustomColors";

const FavoritesModal = ({ visible, onClose, updateFavorites }) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const API_URL = "https://livescore-api.com/api-client/competitions/table.json?competition_id=15&key=QWThEjLbmWGzTcKH&secret=8rwcWaD9vvrudbm37glLz6XW3EwXQhFZ";

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem("favorites");
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error("Fehler beim Laden der Favoriten:", error);
        }
    };

    const fetchTeams = async () => {
        if (isExpanded) {
            setIsExpanded(false);
            setTeams([]);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (data.success) {
                const fetchedTeams = data.data.stages[0].groups[0].standings.map((team) => ({
                    id: team.team.id,
                    name: team.team.name,
                    logo: team.team.logo,
                }));
                setTeams(fetchedTeams);
                setIsExpanded(true);
            } else {
                console.error("Fehler: API hat keinen Erfolg zurückgegeben.");
            }
        } catch (error) {
            console.error("Fehler beim Abrufen der Teams:", error);
        }
        setLoading(false);
    };

    const handleToggleFavorite = async (team) => {
        try {
            let storedFavorites = await AsyncStorage.getItem("favorites");
            let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

            const isFavorite = favorites.some((fav) => fav.id === team.id);

            if (isFavorite) {
                favorites = favorites.filter((fav) => fav.id !== team.id); 
            } else {
                favorites.push(team); 
            }

            await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
            updateFavorites(); 
        } catch (error) {
            console.error("Fehler beim Speichern der Favoriten:", error);
        }
    };

    const toggleFavorite = async (team) => {
        try {
            let storedFavorites = await AsyncStorage.getItem("favorites");
            let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

            const isFavorite = favorites.some((fav) => fav.id === team.id);
            if (isFavorite) {
                favorites = favorites.filter((fav) => fav.id !== team.id);
            } else {
                favorites.push(team);
            }

            await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
            setFavorites(favorites);
            updateFavorites(); 
        } catch (error) {
            console.error("Fehler beim Speichern der Favoriten:", error);
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "90%", backgroundColor: CustomColors.surface, padding: 20, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, color: CustomColors.onSurface }}>
                        Add to Favorites
                    </Text>
                    <TouchableOpacity
                        onPress={fetchTeams}
                        style={{
                            backgroundColor: CustomColors.primary,
                            padding: 10,
                            borderRadius: 5,
                            marginBottom: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ color: CustomColors.onPrimary, fontWeight: "bold" }}>Super League</Text>
                        <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color={CustomColors.onPrimary} />
                    </TouchableOpacity>

                    {loading && <ActivityIndicator size="large" color={CustomColors.onPrimary} />}
                    {isExpanded && (
                        <ScrollView style={{ maxHeight: 300 }}>
                            {teams.map((team) => {
                                const isFavorite = favorites.some((fav) => fav.id === team.id);
                                return (
                                    <View key={team.id} style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image source={{ uri: team.logo }} style={{ width: 40, height: 40, marginRight: 10 }} />
                                            <Text style={{ fontSize: 16, color: CustomColors.onSurfaceVariant }}>{team.name}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => toggleFavorite(team)}
                                            style={{
                                                backgroundColor: isFavorite ? CustomColors.onSurfaceVariant : CustomColors.primary,
                                                padding: 5,
                                                borderRadius: 5
                                            }}
                                        >
                                            <Text style={{ color: CustomColors.onPrimary, fontSize: 12 }}>
                                                {isFavorite ? "Favorit" : "Zu Favoriten"}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    )}
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 15, alignSelf: "center" }}>
                        <Text style={{ color: "red" }}>Schliessen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default FavoritesModal;
