import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import FavoritesModal from "./FavoritesModal";

export default function FavoritesAddButton({ updateFavorites }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ marginRight: 15 }}
            >
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>

            <FavoritesModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                updateFavorites={updateFavorites}
            />
        </>
    );
}
