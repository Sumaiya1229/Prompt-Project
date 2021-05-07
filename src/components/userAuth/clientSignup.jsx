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
import { clientSignupAction } from "./../../redux/action/rootAction";
import { UserAuthTextInput } from "./userAuthComponents/input";
import { useNavigation } from "@react-navigation/core";

const ClientSignup = (props) => {
  const [data, setData] = useState({
    username: "",
    fullname: "",
    address: "",
    zip: "",
    phone: "",
    country: "",
    email: "",
    password: "",
    repass: "",
  });
  console.log("dddddddddd");
  const countyList = ["Bangladesh", "India", "Australia", "Pakistan"];
  const { navigate } = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView
        style={[
          Style.container,
          {
            marginVertical: 5,
          },
        ]}
      >
        <Logo height={50} width={50} />
        <UserAuthTextInput
          placeholder="Username"
          value={data.username}
          onChangeText={(e) => setData({ ...data, username: e })}
        />
        <UserAuthTextInput
          placeholder="Full name"
          value={data.fullname}
          onChangeText={(e) => setData({ ...data, fullname: e })}
        />
        <UserAuthTextInput
          placeholder="Home address"
          value={data.address}
          onChangeText={(e) => setData({ ...data, address: e })}
        />
        <UserAuthTextInput
          placeholder="Zip postal code"
          value={data.zip}
          onChangeText={(e) => setData({ ...data, zip: e })}
        />
        <UserAuthTextInput
          placeholder="Phone"
          value={data.phone}
          onChangeText={(e) => setData({ ...data, phone: e })}
        />
        {/* <UserAuthTextInput placeholder="Country" /> */}
        <View
          style={[
            Style.textInput,
            {
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 5,
            },
          ]}
        >
          <Text style={{ fontSize: 18, color: "#999" }}>Country</Text>
          <Picker
            selectedValue={data.country}
            onValueChange={(e) => setData({ ...data, country: e })}
            style={{
              height: 20,
              width: 100,
              marginLeft: "40%",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            {countyList.map((c) => (
              <Picker.Item key={c} label={c} value={c} />
            ))}
          </Picker>
        </View>
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
        <UserAuthTextInput
          placeholder="Re enter password"
          password={true}
          value={data.repass}
          onChangeText={(e) => setData({ ...data, repass: e })}
          style={
            data.repass !== data.password && data.repass !== ""
              ? { color: "black", borderColor: "red" }
              : { color: "black" }
          }
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginRight: "50%",
          }}
        >
          <_Button
            buttonTitle="Next"
            onPressButton={() => {
              props.clientSignup({
                username: data.username,
                fullname: data.fullname,
                zip: data.zip,
                phone: data.phone,
                country: data.country,
                email: data.email,
                password: data.password,
              });
              console.log(data);
              navigate("_ClientSignup");
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const _ClientSignup = () => {
  const { navigate } = useNavigation();
  const { container } = Style;
  return (
    <View style={container}>
      <Logo height={200} width={200} />
      <UserAuthTextInput
        placeholder="OTP"
        // value={data.email}
        // onChangeText={(e) => setData({ ...data, email: e })}
      />
      <_Button
        buttonTitle="Signup"
        onPressButton={() => navigate("ClientLogin")}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state.spHome);
  return {
    data: state.spHome,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clientSignup: (payload) => dispatch(clientSignupAction(payload)),
  };
};

export default {
  ClientSignup: connect(mapStateToProps, mapDispatchToProps)(ClientSignup),
  _ClientSignup: connect(mapStateToProps, mapDispatchToProps)(_ClientSignup),
};
