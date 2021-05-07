import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput } from "react-native";
import Style from "./../userAuthStyle";
export const UserAuthTextInput = (props) => {
  const { textInput } = Style;
  return (
    <TextInput
      placeholder={props.placeholder}
      style={[textInput, props.style]}
      secureTextEntry={props.password}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};
