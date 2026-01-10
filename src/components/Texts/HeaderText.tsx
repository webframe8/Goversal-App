import { Fonts, Colors } from "@/src/constants/theme";
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type Props = {
    text: string,
    style?: StyleProp<TextStyle>,
    children?: React.ReactNode,
    numberOfLines?: number;
}

export default function HeaderText(props: Props) {

    return (
        <Text style={[ styles.Text, props.style ]} ellipsizeMode="tail" numberOfLines={props.numberOfLines}>
            {props.text}
            {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({

    Text: {
        fontFamily: Fonts.bold,
        fontSize: 32,
        marginVertical: 10,
        fontWeight: "bold",
        color: Colors.textPrimary,
    }

})