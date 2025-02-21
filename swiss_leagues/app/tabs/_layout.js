import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomColors from "../../components/CustomColors";
import DateTabsHeader from "../../components/DateTabHeader";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import FavoritesAddButton from "../../components/FavoritesAddButton";
import { DateProvider } from "../../components/DateContext";
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function TabsLayout() {

    return (
        <DateProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" backgroundColor={CustomColors.surface} />
                <Tabs
                    screenOptions={{
                        tabBarStyle: { backgroundColor: CustomColors.surface },
                        tabBarActiveTintColor: CustomColors.primary,
                        tabBarInactiveTintColor: CustomColors.iconStyle,
                        headerStyle: { backgroundColor: CustomColors.surface },
                        headerTintColor: CustomColors.onSurface,
                    }}
                >
                    <Tabs.Screen
                        name="matches/index"
                        options={{
                            title: "Matches",
                            headerTitle: () => <DateTabsHeader />,
                            tabBarIcon: ({ color }) => (
                                <Ionicons size={28} style={{ marginBottom: -3 }} name="football-outline" color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="leagues"
                        options={{
                            title: "Leagues",
                            tabBarIcon: ({ color }) => (
                                <Ionicons size={28} style={{ marginBottom: -3 }} name="trophy-outline" color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="favorites"
                        options={{
                            title: "Favorites",
                            tabBarIcon: ({ color }) => (
                                <Ionicons size={28} style={{ marginBottom: -3 }} name="star-outline" color={color} />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="settings/index"
                        options={{
                            title: "Settings",
                            tabBarIcon: ({ color }) => (
                                <Ionicons size={28} style={{ marginBottom: -3 }} name="cog-outline" color={color} />
                            ),
                        }}
                    />
                </Tabs>
            </SafeAreaView>
        </DateProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CustomColors.surface,
    },
});
