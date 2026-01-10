import React from "react";
import {
  Image,
  ImageStyle,
  ImageSourcePropType,
  StyleProp,
} from "react-native";

type Props = {
  source: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
  altText?: string;
  ratio?: number;
};

export default function CustomImage(props: Props) {
  const img = Image.resolveAssetSource(props.source);

  return (
    <Image
      {...props}
      source={props.source}
      style={[
        props.styles,
        {
          width: img.width * (props.ratio ?? 1),
          height: img.height * (props.ratio ?? 1),
        },
      ]}
      alt={props.altText}
      resizeMode="cover"
    />
  );
}
