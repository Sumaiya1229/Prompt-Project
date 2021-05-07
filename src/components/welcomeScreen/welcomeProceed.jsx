import React from "react";
import { View, Text } from "react-native";
import WelcomeButton from "./welcomeComponents/welcomeButton";
import Style from "./welcomeScreenStyles";
import Logo from "./../_common/_components/_logo";
import _Button from "./../_common/_components/_button";
const WelcomeProceed = ({ navigation }) => {
  const { container, welcomeLogoText } = Style;
  const renderButton = (title, e) => {
    return (
      <View style={{ margin: "0%" }}>
        <_Button buttonTitle={title} onPressButton={e} />
      </View>
    );
  };
  return (
    <View style={container}>
      <Logo height={200} width={200} />
      <Text style={welcomeLogoText}>
        Time Based Advertising and Real Time Booking
      </Text>
      <View style={{ marginTop: 50 }}>
        {renderButton("Login", () => {
          navigation.navigate("LoginAccountTypePrompt");
        })}
        {renderButton("New user", () => {
          navigation.navigate("SignupAccountTypePrompt");
        })}
      </View>
    </View>
  );
};

export default WelcomeProceed;
