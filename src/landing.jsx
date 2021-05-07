import { Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import WelcomeScreenNavigator from "./navigation/welcomeScreenNavigation";
import SpProviderBottomNav from "./navigation/spProviderBottomNav";
const Landing = (props) => {
  const { login } = props;
  return login.code === 0 ? (
    <WelcomeScreenNavigator />
  ) : login.code === 2 ? (
    <SpProviderBottomNav />
  ) : null;
};
const mapStateToProps = (state) => {
  console.log(state.login.code);
  return { login: state.login };
};
export default connect(mapStateToProps, null)(Landing);
