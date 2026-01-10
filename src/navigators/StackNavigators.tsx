import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackParamList } from "./types/navigation.types";

import HomeScreen from "../screens/Home/Home";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function StackNavigator() {
    return (
        <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
    }}
    >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home"}} />
    </Stack.Navigator>
    )
}