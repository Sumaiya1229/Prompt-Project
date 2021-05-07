import React from "react";
import { Button, TouchableOpacity, View, Text } from "react-native";
import _Style from "./../_style";

const _Button = (props) => {
  const { button } = _Style;
  // const onPressButton = () => {
  //   console.log("pressed");
  //   alert("continue pressed");
  // };
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPressButton}
        style={[button, props.style]}
      >
        <Text style={{ color: "black", fontSize: 20 }}>
          {props.buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default _Button;
