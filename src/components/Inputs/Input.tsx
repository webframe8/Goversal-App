import React, { useState } from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
  View,
  TouchableOpacity,
  ViewStyle
} from "react-native";
import { Colors } from "@/src/constants/theme";
import SmallText from "../Texts/SmallText";
import Icon from "../Icons/Icon";

type Props = {
  lable?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onChangeText?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoFocus?: boolean;
};

export default function Input(props: Props) {
  const [isSecure, setIsSecure] = useState(!!props.secureTextEntry);

  return (
    <View style={{ marginBottom: 10 }}>
      {props.lable && <SmallText text={props.lable} />}

      <View
        style={[
          {
            borderWidth: 1,
            borderColor: Colors.textPrimary,
            flexDirection: "row",
            alignItems: "center",
          },
          props.style
        ]}
      >
        <TextInput
          style={[{flex: 1,}, props.inputStyle]}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.textMuted}
          secureTextEntry={isSecure}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          cursorColor={Colors.textPrimary}
          multiline={props.multiline}
          value={props.value}
          defaultValue={props.defaultValue}
          editable={!props.readOnly}
          autoCapitalize={props.autoCapitalize}
          autoFocus={props.autoFocus}
        />

        {/* 👁 Eye toggle */}
        {props.secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsSecure((prev) => !prev)}
            hitSlop={10}
          >
            <Icon
              name={isSecure ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={Colors.textMuted}
            />
          </TouchableOpacity>
        )}
      </View>
      {props.children && <View style={{ marginTop: 6 }}>{props.children}</View>}
    </View>
  );
}
