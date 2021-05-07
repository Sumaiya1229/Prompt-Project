import { Text, View, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import RequestCard from "./spCommon/requestCard";
import SpTimeAllocation from "./spTimeAllocation";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeMarkup from "./home";
export const Profile = () => {
  return <Text>This is the profile</Text>;
};
export const Feedback = () => {
  return <Text>This is the Feedback</Text>;
};
export const Promotion = () => {
  return <Text>This is the Promotion</Text>;
};
export const Home = () => {
  return <HomeMarkup />;
};
export const Request = () => {
  return (
    <ScrollView>
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
    </ScrollView>
  );
};
export const TestCase = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{ borderWidth: 5, borderColor: "black", margin: 20 }}
        onChangeText={(e) => setText(e)}
        value={text}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          width: 100,
          margin: 20,
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>

      {text === "" ? null : (
        <Text style={{ fontSize: 25, margin: 20 }}>Hello! {text}</Text>
      )}
    </View>
  );
};
