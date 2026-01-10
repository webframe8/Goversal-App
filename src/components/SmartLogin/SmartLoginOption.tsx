import SmallText from "../Texts/SmallText";
import { ViewStyle, StyleProp, TouchableOpacity } from "react-native";
import Icon from "../Icons/Icon";

type Props = {
  label?: string;
  style?: StyleProp<ViewStyle>;
  iconName: string;
  size?: number;
  disabled?: boolean;
  key: number,
};

export default function SmartLoginOption(props: Props) {
  if (props.disabled) return null; // ✅ best practice

  return (
    <TouchableOpacity style={[props.style, {flexDirection: "row", gap: 2,}]}>
      <Icon name={props.iconName} size={props.size} />
      {props.label && <SmallText text={props.label} />}
    </TouchableOpacity>
  );
}
