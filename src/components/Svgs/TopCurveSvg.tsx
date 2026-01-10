import Svg, { Path } from "react-native-svg";
import { ViewStyle, StyleProp } from "react-native";

type Props = {
    style?: StyleProp<ViewStyle>
}

export function TopCurve(props: Props) {
  return (
    <Svg
      width="100%"
      height={100}
      viewBox="0 0 375 90"
      style={[props.style]}
    >
      <Path
        d="
          M0,90
          L0,40
          C60,0 315,0 375,40
          L375,90
          Z
        "
        fill="#fff"
      />
    </Svg>
  );
}
