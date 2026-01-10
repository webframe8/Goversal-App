import React from "react";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

type Props = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>
};

const ICONS = {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Feather,
};

export default function Icon(props: Props) {
  for (const IconSet of Object.values(ICONS)) {
    // @ts-ignore – dynamic glyph lookup
    if (IconSet.glyphMap && IconSet.glyphMap[props.name]) {
      return <IconSet name={props.name as any} size={props.size} color={props.color} style={[props.style]} />;
    }
  }

  // ❓ Fallback icon
  return (
    <Ionicons
      name='help'
      size={props.size}
      color={props.color}
    />
  );
}
