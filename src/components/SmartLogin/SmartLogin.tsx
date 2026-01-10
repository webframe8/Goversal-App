import React, {useMemo} from "react";
import { StyleProp, View, ViewStyle, StyleSheet, Dimensions } from "react-native";
import SmallText from "../Texts/SmallText";
import SmartLoginOption from "./SmartLoginOption";
import { Colors } from "@/src/constants/theme";

type SmartLoginItem = {
  key: number;
  iconName: string;
  size?: number;
  lable?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

type Props = {
  style?: StyleProp<ViewStyle>;
  optionStyle?: StyleProp<ViewStyle>;
  nolabel?: boolean;
  noTitle?: boolean;
  smartloginOptions?: SmartLoginItem[]; // optional + array
};

const screenwidth = Dimensions.get("window").width;

export default function SmartLogin(props: Props) {
  const loginItems = useMemo(() => props.smartloginOptions ?? [], [props.smartloginOptions]);

  return (
    <View style={[props.style]}>
      {!props.noTitle && (
        <View style={styles.context}>
          <View style={{flex: 1, borderWidth: 1}} />
          <SmallText text="Or continue with" style={{color: Colors.textSecondary}} />
          <View style={{flex: 1, borderWidth: 1,}} />
        </View>
      )}

      <View style={[props.optionStyle, {marginBottom: 10,}]}>
        {loginItems.map((item) => (
          <SmartLoginOption
            iconName={item.iconName}
            size={item.size}
            style={item.style}
            label={item.lable}
            disabled={item.disabled}
            key={item.key}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    context: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
    },
});
