import React, { useState, useContext } from "react";
import { Authstyle } from "@/src/constants/styles/authstyles";
import { View } from "react-native";
import CustomButton from "@/src/components/Buttons/CustomButton";
import CustomImage from "@/src/components/Image/CustomeImage";
import MediumText from "@/src/components/Texts/MediumText";
import Input from "@/src/components/Inputs/Input";
import ScreenLayout from "@/src/components/Layouts/ScreenLayout";
import SmallText from "@/src/components/Texts/SmallText";
import { LinearGradient } from "expo-linear-gradient";
import { TopCurve } from "@/src/components/Svgs/TopCurveSvg";
import { Colors, Fonts } from "@/src/constants/theme";
import Link from "@/src/components/Texts/LinkText";
import SmartLogin from "@/src/components/SmartLogin/SmartLogin";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/env.config";
import { useAuth } from "@/src/hooks/useAuth";
import { useAlert } from "@/src/contexts/AlertContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "@/src/navigators/types/navigation.types";

type Props = NativeStackScreenProps<AppStackParamList, "Login">;

export default function LoginScreen({navigation}: Props) {
  const { showAlert } = useAlert();
  const [smartLink, setSmartLink] = useState([
    {
      key: 1,
      iconName: "google",
      size: 20,
      lable: "Google",
      style: Authstyle.otherlogin,
    },
    {
      key: 2,
      iconName: "github",
      size: 20,
      lable: "Github",
      style: [Authstyle.otherlogin, { gap: 5 }],
    },
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const isEmail = EMAIL_REGEX.test(email);
  const isPasword = PASSWORD_REGEX.test(password);

  const isValid = isEmail && isPasword;

  const handleSubmit = async () => {
    try {
      const response = await login({ email, password });
      if (response?.error) {
        console.log(response?.error);
        showAlert({
          message: response?.error,
          type: "error",
          title: "Error Occured!",
          iconName: "error",
        });
      }
      if (response?.success) {
        console.log(response?.success);
        showAlert({
          message: response?.success,
          type: "success",
          title: "Login Successfull!",
          iconName: "checkmark-circle-outline",
        });
      }
    } catch (err: any) {
      const data = err?.response?.data;
      console.log(data?.error);
      showAlert({
          message: data?.error,
          type: "error",
          title: "Error Occured!",
          iconName: "error",
        });
    }
  };

  return (
    <>
      <ScreenLayout style={{ backgroundColor: Colors.surface }}>
        <LinearGradient
          colors={["skyblue", "#d5f6fcff", "#030303ff"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={Authstyle.logo}
        >
          <CustomImage
            source={require("../../../assets/images/Flight-Booking-amico.png")}
            ratio={0.2}
          />
        </LinearGradient>
        <TopCurve style={{ marginTop: -60 }} />
        <View style={Authstyle.form}>
          <MediumText
            text="Login to Access Your"
            children={
              <MediumText
                text="Account"
                style={{
                  color: Colors.seecondary,
                  fontSize: 30,
                  fontWeight: "700",
                }}
              />
            }
            style={{
              paddingHorizontal: 15,
              textAlign: "center",
              marginTop: -20,
              fontSize: 30,
              fontWeight: "700",
              marginBottom: 30,
            }}
          />
          <Input
            lable="Your-email"
            keyboardType="email-address"
            placeholder="yourname@email.com"
            style={Authstyle.input}
            inputStyle={{ fontFamily: Fonts.semibold }}
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            lable="Password"
            placeholder="************"
            secureTextEntry
            style={Authstyle.input}
            inputStyle={{ fontFamily: Fonts.semibold }}
            value={password}
            onChangeText={setPassword}
          />
          <Link label="forgot Password?" />
          <CustomButton
            onPress={handleSubmit}
            label="Login"
            type="submit"
            buttonStyle={Authstyle.formbutton}
            backgroundColor={Colors.primary}
            labelColor={Colors.surface}
            disabled={!isValid}
          />
          <SmartLogin
            smartloginOptions={smartLink}
            optionStyle={{ flexDirection: "row", gap: 10 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <SmallText text="Dont't have an account?" />
            <Link label="Create one" />
          </View>
        </View>
      </ScreenLayout>
    </>
  );
}
