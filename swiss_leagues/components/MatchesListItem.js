import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

export default function MatchesListItem({item}){
    console.log(item)
    return(
        <TouchableOpacity>
            <View style={style.View}>
            <Text style={style.Text}>
            Home:{item.home.name} vs Away:{item.away.name}
            </Text>
        </View>
        </TouchableOpacity>
        
    )
}

const style = StyleSheet.create({
    View:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    Text:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    Icon:{
        marginRight: 12,
    }
})