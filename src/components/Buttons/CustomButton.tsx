import React, { useRef } from "react";
import { Colors, Fonts } from "@/src/constants/theme";
import {
  View,
  Animated,
  Text,
  Image,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
  StyleSheet
} from "react-native";

type Props = {
    onPress: ()=> void,
    disabled?: boolean,
    label: string;
    type?: string;
    width?: any;
    labelColor?: string;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    image?: ImageSourcePropType;
    buttonStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    imageHeight?: number;
    imageWidth?: number;
};


export default function CustomButton(props: Props)  {

    const scaleAnimation = useRef(new Animated.Value(0)).current;

    const animatedScale = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
    });

    const onPressIn = () => {
        Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        Animated.timing(scaleAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable 
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={props.onPress}
        disabled={props.disabled}
        style={[props.style]}>
            <Animated.View 
            style={[styles.button, {
                transform: [{ scaleX: animatedScale }, { scaleY: animatedScale }],
                width: props.width,
                backgroundColor: props.backgroundColor || Colors.surface,
            }, props.disabled && styles.disabled, props.buttonStyle]}>
                {props.image && (
                    <Image source={props.image} style={{
                        width: props.imageWidth,
                        height: props.imageHeight,
                    }} />
                )}
                <Text style={[styles.text, props.textStyle, props.disabled && {color: Colors.textSecondary}, {color: props.labelColor}]}>
                    {props.label}
                </Text>
                {props.children}
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "auto",
        marginBottom: 20,
        padding: 10,
    },
    disabled: {
        opacity: 0.6,
    },
    text: {
        textAlign: "center",
        color: Colors.textPrimary,
        fontSize: 16,
        fontWeight: "700",
        fontFamily: Fonts.bold,
        margin: 0,
    }
})
