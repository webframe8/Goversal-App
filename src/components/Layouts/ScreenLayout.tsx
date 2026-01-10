import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { GlobalStyles } from "@/src/constants/styles/globalstyles";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  keyboardoffset?: number;
};

export default function ScreenLayout(props: Props) {
  return (
    <>
<KeyboardAvoidingView
  style={[GlobalStyles.contaneir, props.style]}
  behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
>
  <ScrollView
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
    bounces={false}
    style={{flex: 1}}
    contentContainerStyle={{
    minHeight: '100%',
  }}
  >
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
  </ScrollView>
</KeyboardAvoidingView>

    </>
  );
}
