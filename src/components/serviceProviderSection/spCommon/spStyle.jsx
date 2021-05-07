import { StyleSheet } from "react-native";
const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardView: {
    padding: 10,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  ////////////
  timeSlotView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  timeSlot: {
    //   backgroundColor: "red",
    height: 15,
    width: 35,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#de5f23",
    marginLeft: 5,
  },
  timeSLotSelected: {
    backgroundColor: "#30D5C8",
    overflow: "hidden",
    shadowColor: "black",
    shadowRadius: 2,
    shadowOpacity: 1,
  },
});
export default CommonStyle;
