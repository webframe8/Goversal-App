import React from "react";
import StackNavigator from "./src/navigators/StackNavigators";
import AuthNavigator from "./src/navigators/AuthNavigators";
import { AuthContext } from "./src/contexts/AuthContext";
import { useContext } from "react";

export default function MainApp() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <AuthNavigator />;
  }

  return <StackNavigator />;
}
