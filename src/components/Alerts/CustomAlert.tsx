import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
} from "react-native";

import { Colors, AlertColors } from "@/src/constants/theme";
import Icon from "../Icons/Icon";
import SmallText from "../Texts/SmallText";
import MediumText from "../Texts/MediumText";

type AlertType = keyof typeof AlertColors;

type Props = {
  message: string;
  title?: string;
  type: AlertType;
  iconName?: string;
  iconSize?: number;
  duration?: number; // auto close time
  onClose?: () => void;
  visible?: boolean;
};

export default function CustomAlert({
  message,
  title,
  type,
  iconName,
  iconSize = 24,
  duration = 10000,
  visible,
  onClose,
}: Props) {
  const translateY = useRef(new Animated.Value(-200)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  ////const [visible, setVisible] = useState(visibility ?? false)

  useEffect(() => {
    if (!visible) return;

    // Slide IN
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 40,
        duration: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto close
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -200,
          duration: 300,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onClose?.();
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

    //close
  const closeWithAnimation = () => {
  Animated.parallel([
      Animated.timing(translateY, {
        toValue: -200,
        duration: 250,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(onClose);
};


  return (
    <Modal transparent statusBarTranslucent animationType="none">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.container,
            {
              borderLeftColor: AlertColors[type],
              transform: [{ translateY }],
              opacity,
            },
          ]}
        >
          <Pressable style={styles.close} onPress={closeWithAnimation}>
            <Icon name="close" size={22} />
          </Pressable>

          {title && (
            <View style={styles.titleRow}>
              {iconName && (
                <Icon
                  name={iconName}
                  size={iconSize}
                  color={AlertColors[type]}
                  style={{marginTop: -5,}}
                />
              )}
              <MediumText
                text={title}
                style={{ color: AlertColors[type] }}
              />
            </View>
          )}

          <SmallText text={message} style={styles.message} />
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 5,
    marginTop: 10,
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  message: {
    fontSize: 16,
  },
});

