import React from "react";
import { View, Text } from "react-native";

import WelcomeButton from "./welcomeComponents/welcomeButton";
import Style from "./welcomeScreenStyles";
import Logo from "./../_common/_components/_logo";
import _Button from "../_common/_components/_button";
const Welcome = ({ navigation }) => {
  const {
    container,
    continueContainer,
    welcomeContainer,
    welcomeLogoText,
  } = Style;
  return (
    <View style={container}>
      <View style={welcomeContainer}>
        <Logo height={200} width={200} />
        <Text style={[welcomeLogoText, { letterSpacing: 15, marginBottom: 5 }]}>
          Prompt
        </Text>
      </View>

      <Text style={[welcomeLogoText, { fontSize: 15, marginBottom: 0 }]}>
        Bookings for the Right Now Crowd.
        {"\n"}
        {"\n"}
        The ultimate Gig Worker business tool that connects service providers
        with customers
      </Text>
      <View style={continueContainer}>
        <_Button
          buttonTitle="Continue"
          onPressButton={() => navigation.push("WelcomeProceed")}
        />
      </View>
    </View>
  );
};
export default Welcome;
