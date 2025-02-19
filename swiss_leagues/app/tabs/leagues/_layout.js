import { Stack } from "expo-router";
import CustomColors from "../../../components/CustomColors";
import {SafeAreaView, StyleSheet} from "react-native";

export default function Layout(){
    return(
        <SafeAreaView style = {styles.container}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        title: "Leagues",
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: CustomColors.surface, // Grau für Header Hintergrund
                        },
                        headerTintColor: CustomColors.onSurface, // Textfarbe für den Header weiss
                    }}
                />
            </Stack>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CustomColors.surface, //grau für Header und Bottom Navigation
    },
});