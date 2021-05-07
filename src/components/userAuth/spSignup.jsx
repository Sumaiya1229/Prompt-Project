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
const SpSignup = () => {
  const { navigate } = useNavigation();
  const [data, setData] = useState({
    company: "",
    fullname: "",
    businessAddress: "",
    zip: "",
    phone: "",
    businessPhone: "",
    country: "",
    email: "",
    password: "",
    repass: "",
    licensed: false,
    file: null,
  });
  const countyList = ["Bangladesh", "India", "Australia", "Pakistan"];
  const uploadFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    setData({ ...data, file: result });
    // alert(result.uri);
    console.log(data.file);
  };
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
          placeholder="Company"
          value={data.company}
          onChangeText={(e) => setData({ ...data, company: e })}
        />
        <UserAuthTextInput
          placeholder="Full name"
          value={data.fullname}
          onChangeText={(e) => setData({ ...data, fullname: e })}
        />
        <UserAuthTextInput
          placeholder="Business Address"
          value={data.businessAddress}
          onChangeText={(e) => setData({ ...data, businessAddress: e })}
        />
        <UserAuthTextInput
          placeholder="Zip postal code"
          value={data.zip}
          onChangeText={(e) => setData({ ...data, zip: e })}
        />
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
          placeholder="Phone"
          value={data.phone}
          onChangeText={(e) => setData({ ...data, phone: e })}
        />
        <UserAuthTextInput
          placeholder="Business Phone Number"
          value={data.businessPhone}
          onChangeText={(e) => setData({ ...data, businessPhone: e })}
        />
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
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <CheckBox
            value={data.licensed}
            onValueChange={(e) => {
              setData({ ...data, licensed: e, file: null });
            }}
          />
          {data.licensed ? (
            <Text style={{ fontSize: 18, color: "#999" }}>Licensed</Text>
          ) : (
            <Text style={{ fontSize: 18, color: "#999" }}>Not Licensed</Text>
          )}
        </View>
        {data.licensed && (
          <_Button
            buttonTitle="Upload PDF license"
            style={{ marginBottom: 0 }}
            onPressButton={() => uploadFile()}
          />
        )}
        {data.file && data.licensed ? (
          <Text style={{ fontSize: 18, marginBottom: 15 }}>
            {data.file.name}
          </Text>
        ) : null}

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
            style={{ marginTop: 10 }}
            onPressButton={() => {
              navigate("_SpSignup");
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const _SpSignup = () => {
  const { container } = Style;
  const { navigate } = useNavigation();
  return (
    <View style={container}>
      <Logo height={200} width={200} />
      <UserAuthTextInput
        placeholder="OTP"
        // value={data.email}
        // onChangeText={(e) => setData({ ...data, email: e })}
      />
      <_Button buttonTitle="Signup" onPressButton={() => navigate("SpLogin")} />
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
  return {};
};

export default {
  SpSignup: connect(mapStateToProps, mapDispatchToProps)(SpSignup),
  _SpSignup: connect(mapStateToProps, mapDispatchToProps)(_SpSignup),
};
