import { View, StyleSheet } from "react-native";
import LeagueListItem from "../../../components/LeagueListItem";
import { Link } from "expo-router";

export default function LeagueIndex() {
    return (
        <View style={styles.container}>
            <Link href="/superLeagueScreen" asChild>
            <LeagueListItem
                    leagueName="Super League - 1. Liga"
                    logo={require("../../../assets/Credit_Suisse_Super_League.png")}
                />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#121212",
    },
});
