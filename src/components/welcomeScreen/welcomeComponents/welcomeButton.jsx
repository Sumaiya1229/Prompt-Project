import React from "react";
import { Button, TouchableOpacity, View, Text } from "react-native";
import Style from "../welcomeScreenStyles";
const WelcomeButton = (props) => {
  const { welcomeButton } = Style;
  // const onPressButton = () => {
  //   console.log("pressed");
  //   alert("continue pressed");
  // };
  return (
    <View>
      <TouchableOpacity onPress={props.onPressButton} style={welcomeButton}>
        <Text style={{ color: "white", fontSize: 20 }}>
          {props.buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeButton;
