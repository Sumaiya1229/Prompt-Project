import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import WelcomeScreenNavigator from './src/navigation/welcomeScreenNavigation';
import { NavigationContainer } from "@react-navigation/native";
import AccountTypePrompt from './src/components/userAuth/userAuthCommon/accountTypePrompt';
import SpProviderBottomNav from './src/navigation/spProviderBottomNav';
import { Provider } from "react-redux";
import store from './src/redux/index';
import Landing from "./src/landing";
import ClientBottomNav from './src/navigation/clientBottomNav';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider store={store}>
        {/* <View style={styles.statusbar}></View> */}
        {/* <Landing/> */}
        <ClientBottomNav/>
        {/* <SpProviderBottomNav/> */}
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    height: StatusBar.currentHeight,
    backgroundColor: "white",
  },
});
