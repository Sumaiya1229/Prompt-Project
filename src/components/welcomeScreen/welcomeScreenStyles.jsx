import { StyleSheet } from "react-native";
const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeContainer: {
    alignItems: "center",
  },
  welcomeLogo: { width: 300, height: 300, marginBottom: 30 },
  welcomeLogoText: {
    fontSize: 25,
    textAlign: "center",
    marginHorizontal: 20,
  },
  //   continue button section
  continueContainer: {
    marginTop: "10%",
  },
  welcomeButton: {
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 60,
    backgroundColor: "#2980b9",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ////////////
});
export default CommonStyle;
