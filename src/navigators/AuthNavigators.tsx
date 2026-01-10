import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { AppStackParamList } from "./types/navigation.types";

import LoginScreen from "../screens/Auth/Login";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
    }}
    >
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login"}} />
    </Stack.Navigator>
    )
}