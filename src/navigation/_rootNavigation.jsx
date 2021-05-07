import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenNavigator from "./welcomeScreenNavigation";
import AuthNavigation from "./authNavigation";
import { View } from "react-native";
const RootNavigation = () => {
  return (
    <View>
      <WelcomeScreenNavigator />
      <AuthNavigation />
    </View>
  );
};

export default RootNavigation;
