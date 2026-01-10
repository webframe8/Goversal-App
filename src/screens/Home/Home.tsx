import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "@/src/hooks/useAuth";
import { useAlert } from "@/src/contexts/AlertContext";
import Icon from "@/src/components/Icons/Icon";
export default function HomeScreen() {
  const { logout } = useAuth();
  const { showAlert } = useAlert();
  const handleLogout = () => {
    logout();
    showAlert({
      message: "logout successfull!",
      type: "info",
      title: "loged out",
      iconName: "logout",
    });
  };
  return (
    <>
      <View style={styles.conatneir}>
        <Text>this is home page</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text>logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conatneir: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});
