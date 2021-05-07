import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../components/welcomeScreen/welcome";
import WelcomeProceed from "../components/welcomeScreen/welcomeProceed";
import { LoginPrompt, SignupPrompt } from "../components/userAuth/prompt";
import ClientSignupComp from "../components/userAuth/clientSignup";
import spSignupComp from "../components/userAuth/spSignup";
import ClientLogin from "../components/userAuth/clientLogin";
import SpLogin from "../components/userAuth/spLogin";
const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Welcome"
          component={<SpProviderBottomNav />}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeProceed"
          component={WelcomeProceed}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="LoginAccountTypePrompt"
          component={LoginPrompt}
          options={{ title: "Login Type" }}
        />
        <Stack.Screen
          name="SignupAccountTypePrompt"
          component={SignupPrompt}
          options={{ title: "Signup Type" }}
        />

        <Stack.Screen
          name="ClientLogin"
          component={ClientLogin}
          options={{
            title: "Login as Client",
          }}
        />
        <Stack.Screen
          name="SpLogin"
          component={SpLogin}
          options={{
            title: "Login as Service Provider",
          }}
        />
        <Stack.Screen
          name="ClientSignup"
          component={ClientSignupComp.ClientSignup}
          options={{
            title: "Signup as client",
          }}
        />
        <Stack.Screen
          name="_ClientSignup"
          component={ClientSignupComp._ClientSignup}
          options={{
            title: "OTP",
          }}
        />
        <Stack.Screen
          name="SpSignup"
          component={spSignupComp.SpSignup}
          options={{
            title: "Signup as Service Provider",
          }}
        />
        <Stack.Screen
          name="_SpSignup"
          component={spSignupComp._SpSignup}
          options={{
            title: "Signup as Service Provider",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
