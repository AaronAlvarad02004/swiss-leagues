import { forwardRef } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

const LeagueListItem = forwardRef(({ leagueName, logo, onPress }, ref) => {
    return (
        <TouchableOpacity ref={ref} style={styles.container} onPress={onPress}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.text}>{leagueName}</Text>
        </TouchableOpacity>
    );
});

export default LeagueListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        borderWidth: 1,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
