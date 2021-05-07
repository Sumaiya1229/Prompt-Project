import React from "react";
import { Image } from "react-native";
import Style from "./../welcomeScreenStyles";
const WelcomeLogo = () => {
  const { welcomeLogo } = Style;
  return (
    <Image
      style={welcomeLogo}
      source={{ uri: "https://i.ibb.co/kShVGhh/logo.png" }}
    />
  );
};

export default WelcomeLogo;
