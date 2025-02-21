import { Image, StyleSheet} from "react-native"
export default function HeaderLogo(){
    return(
        <Image source={require("../assets/Swiss-Leagues-Logo.png")} style={styles.headerLogo}></Image>
    )
}
const styles = StyleSheet.create({
    headerLogo: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 50
    },
});