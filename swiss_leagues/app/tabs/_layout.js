import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons"
import CustomColors from "../../components/CustomColors";

export default function TabsLayout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="matches/index"
                options={{
                    title:"Matches",
                    tabBarIcon: ({color}) => (
                        <Ionicons
                            size={28}
                            style={{marginBottom: -3}}
                            name="football-outline"
                            color={color}
                        />
                    ),
                    tabBarActiveTintColor: CustomColors.primary,
                    tabBarInactiveTintColor: CustomColors.iconStyle
                }}
            />
             <Tabs.Screen
                name="leagues"
                options={{
                    title:"Leagues",
                    headerShown: false,
                    tabBarIcon: ({Color}) => (
                        <Ionicons
                            size={28}
                            style={{marginBottom: -3}}
                            name="trophy-outline"
                            color={Color}
                        />
                    )
                }}
            />
                <Tabs.Screen
                name="favorites"
                options={{
                    title:"Favorites",
                    headerShown: false,
                    tabBarIcon: ({Color}) => (
                        <Ionicons
                            size={28}
                            style={{marginBottom: -3}}
                            name="star-outline"
                            color={Color}
                        />
                    )
                }}
            />
                <Tabs.Screen
                name="settings/index"
                options={{
                    title:"Settings",
                    tabBarIcon: ({Color}) => (
                        <Ionicons
                            size={28}
                            style={{marginBottom: -3}}
                            name="cog-outline"
                            color={Color}
                        />
                    )
                }}
            />
        </Tabs>
    )
}