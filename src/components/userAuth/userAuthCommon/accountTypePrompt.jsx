import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import _Button from "./../../_common/_components/_button";
import Logo from "./../../_common/_components/_logo";
import Style from "./../userAuthStyle";
const AccountTypePrompt = (props) => {
  const { container, logoText } = Style;
  return (
    <View style={container}>
      <Logo height={200} width={200} />
      <Text style={[logoText, { marginBottom: 30 }]}>{props.title}</Text>
      <View>
        <_Button
          buttonTitle={`${props.auth} as Client`}
          onPressButton={props.onPressButtonClient}
        />
        <_Button
          buttonTitle={`${props.auth} as Service Provider`}
          onPressButton={props.onPressButtonSP}
        />
      </View>
    </View>
  );
};

export default AccountTypePrompt;
