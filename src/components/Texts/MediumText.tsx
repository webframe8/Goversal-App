import React from "react";
import { Colors, Fonts } from "@/src/constants/theme";
import { Text, TextStyle, StyleProp, StyleSheet } from "react-native";

type Props = {
    text: string,
    style?: StyleProp<TextStyle>,
    children?: React.ReactNode,
    numberOfLines?: number;
}

export default function MediumText(props: Props) {

    return (
        <Text style={[ styles.Text, props.style,]} ellipsizeMode="tail" numberOfLines={props.numberOfLines}>
            {props.text} {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({

    Text: {
        fontSize: 24,
        marginVertical: 10,
        color: Colors.textPrimary,
        fontFamily: Fonts.bold,
        fontWeight: "600",
    }

})