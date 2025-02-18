import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons"
import CustomColors from "/../components/CustomColors.js";

export default function TabsLayout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="matches/index"
                options={{
                    title:"Matches",
                    tabBarIcon: ({Color}) => (
                        <Ionicons
                            size={28}
                            style={{marginBottom: -3}}
                            name="football-outline"
                            color={Color}
                        />
                    )
                }}
            />
             <Tabs.Screen
                name="leagues/index"
                options={{
                    title:"Leagues",
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
                name="favorites/index"
                options={{
                    title:"Favorites",
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