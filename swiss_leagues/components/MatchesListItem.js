import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import CustomColors from "./CustomColors"

export default function MatchesListItem({item}){
    console.log(item)
    const rawTime = item.time.trim()
    const [hours, minutes] = rawTime.split(":")
    const timeWithAddedHour = (parseInt(hours,10)+1) % 24
    const formattedTime = `${timeWithAddedHour}:${minutes}`
    return(
        <View style={styles.matchContainer}>
            <View style={styles.teamContainer}>
                <Image source={{ uri: item.home.logo }} style={styles.teamLogo} />
                <Text style={styles.teamName}>{item.home.name}</Text>
            </View>
            {item.scores ? (
            <Text style={styles.score}>{item.scores.score}</Text>
            ) : (
            <Text style={styles.formattedTime}>{formattedTime}</Text>
            )}
            <View style={styles.teamContainer}>
                <Image source={{ uri: item.away.logo }} style={styles.teamLogo} />
                <Text style={styles.teamName}>{item.away.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    matchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        borderWidth: 1,
        justifyContent: "space-between"
    },
    teamContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    teamLogo: {
        width: 30,
        height: 30,
        marginTop: 5
    },
    teamName: {
        color: "#FFFFFF",
        fontSize: 14,
    },
    score: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        width: 50,
    },
    formattedTime: {
        color: CustomColors.iconStyle,
        fontSize: 13,
        textAlign: "center",
        width: 50,
    }
})