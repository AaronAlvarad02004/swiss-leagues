import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CustomColors from "../../../components/CustomColors";
import { useDate } from "../../../components/DateContext"; // ⬅️ useDate importieren
import MatchesListItem from "../../../components/MatchesListItem";

export default function MatchesScreen() {
    const { selectedDate } = useDate(); // ⬅️ Datum aus dem Context holen
    const [pastMatches, setPastMatches] = useState([]);

    const url = new URL("https://livescore-api.com/api-client/matches/history.json")
    const params = {
        key: "hUe0szQFB8lFsToH",
        secret: "Jhp4jJmQXRaVjOkBIyBb8sQJAco25NKP",
        from: "2025-02-16",
        competition_id: "15"
    }

    Object.keys(params).forEach(key => url.searchParams.append(key,params[key]))

    console.log(url)

    useEffect(()=>{
        const loadPastMatches = async () => {
            const response = await fetch(url,{
                method: "GET",
            })
            if(!response.ok){
                console.log("error")
            }

            const pastMatches = await response.json()
            console.log(pastMatches)
            setPastMatches(pastMatches.data.match)
        }
        loadPastMatches()
    },[])

    console.log(pastMatches)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {`Zeige Spiele für: ${selectedDate}`}
            </Text>
            <FlatList
                data={pastMatches}
                renderItem={MatchesListItem}
            />

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
