import { Stack } from "expo-router";
import CustomColors from "../../../components/CustomColors";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen 
                name="index"
                options={{
                    title: "Favorites",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: CustomColors.surface, // Grau für Header Hintergrund
                    },
                    headerTintColor: CustomColors.onSurface, // Textfarbe für den Header weiss
                }}
            />
        </Stack>
    )
}