import React from "react";
import { Image } from "react-native";
import _Style from "./../_style";
const Logo = (props) => {
  //   const { logo } = Style;
  return (
    <Image
      style={{ width: props.width, height: props.height, marginBottom: 30 }}
      source={{ uri: "https://i.ibb.co/D5r7rLf/prompt.png" }}
    />
  );
};

export default Logo;
