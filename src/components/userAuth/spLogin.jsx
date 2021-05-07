import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";
// import { DocumentPicker, ImagePicker } from "expo";
import { connect } from "react-redux";
import Logo from "./../_common/_components/_logo";
import _Button from "./../_common/_components/_button";
import Style from "./userAuthStyle";
import { clientSignupAction, login } from "./../../redux/action/rootAction";
import { UserAuthTextInput } from "./userAuthComponents/input";
import { useNavigation } from "@react-navigation/core";
const SpLogin = (props) => {
  const { navigate } = useNavigation();
  const { container } = Style;
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
    code: 2,
  });
  return (
    <View style={container}>
      <Logo height={200} width={200} />
      <UserAuthTextInput
        placeholder="Email"
        value={data.email}
        onChangeText={(e) => setData({ ...data, email: e })}
      />
      <UserAuthTextInput
        placeholder="Password"
        password={true}
        value={data.password}
        onChangeText={(e) => setData({ ...data, password: e })}
      />
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <CheckBox
          value={data.remember}
          onValueChange={(e) => setData({ ...data, remember: e })}
        />
        <Text style={{ fontSize: 20 }}>Keep me loggesd in</Text>
      </View>
      <_Button
        buttonTitle="Login"
        onPressButton={() => {
          props.login({ data });
        }}
      />
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch(login(payload)),
  };
};
export default connect(null, mapDispatchToProps)(SpLogin);
