import { Stack } from "expo-router";
import CustomColors from "../../../components/CustomColors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Favorites",
                    headerStyle: {
                        backgroundColor: CustomColors.surface,
                    },
                    headerTintColor: CustomColors.onSurface,
                }}
            />
        </Stack>
    );
}
