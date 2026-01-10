import { Colors, Fonts } from "../theme";
import { StyleSheet } from "react-native";


export const Authstyle = StyleSheet.create({
    logo: {
        width: "100%",
        alignItems: "center",
    },
    form: {
        backgroundColor: Colors.surface,
        padding: 24,
        flex: 1,
        marginTop: -55,
        paddingBottom: 35,
    },
    input:{
        padding: 6,
        borderRadius: 30,
        paddingHorizontal: 17,
        marginTop: 7,
    },
    formbutton: {
        marginVertical: 10,
        padding: 16,
        borderRadius: 30,
    },
    otherlogin: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.textSecondary,
        flex: 1,
        borderRadius: 30,
        paddingHorizontal: 13,
        justifyContent: "center",
    }
})