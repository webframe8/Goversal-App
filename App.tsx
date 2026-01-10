import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/AuthContext";
import { AlertProvider } from "./src/contexts/AlertContext";
import MainApp from './Mainapp'

export default function App() {
    const [fontLoaded, fontError] = useFonts({
        'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!fontLoaded && !fontError) return null

    return (
        <>
        <NavigationContainer>
            <AlertProvider>
                <AuthProvider>
                <MainApp />
            </AuthProvider>
            </AlertProvider>
        </NavigationContainer>
        </>
    )
}