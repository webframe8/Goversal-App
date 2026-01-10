import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import SmallText from "./SmallText";
import React from "react";

type Props = {
    to?: string;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    label: string;
    textDecoration?: "underline";
}

export default function Link(props: Props) {
    return (
        <TouchableOpacity style={[props.style,]} onPress={() => {console.log(props.to)}}>
            <SmallText text={props.label} style={{textDecorationLine: props.textDecoration ?? "underline",}}/>
            {props.children}
        </TouchableOpacity>
    )
}