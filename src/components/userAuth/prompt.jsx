import React from "react";
import AccountTypePrompt from "./userAuthCommon/accountTypePrompt";
export const LoginPrompt = ({ navigation }) => {
  return (
    <AccountTypePrompt
      title="Select login type"
      auth="Login"
      onPressButtonClient={() => navigation.navigate("ClientLogin")}
      onPressButtonSP={() => navigation.navigate("SpLogin")}
    />
  );
};
export const SignupPrompt = ({ navigation }) => {
  return (
    <AccountTypePrompt
      title="Select Signup type"
      auth="Signup"
      onPressButtonClient={() => navigation.navigate("ClientSignup")}
      onPressButtonSP={() => navigation.navigate("SpSignup")}
    />
  );
};
