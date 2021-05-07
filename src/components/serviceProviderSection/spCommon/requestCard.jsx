import React from "react";
import { Text, View } from "react-native";
import _Button from "../../_common/_components/_button";
import Style from "./spStyle";

const RequestCard = () => {
  const { container, cardView } = Style;
  return (
    <View>
      <View style={cardView}>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>Haircut</Text>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>Mr. Kalam</Text>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>Monday</Text>
        <Text style={{ fontSize: 18 }}>2020-12-21</Text>
        <Text style={{ fontSize: 18 }}>1PM - 1:30PM</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <_Button
            buttonTitle="Accept"
            style={{ width: 150, borderColor: "green" }}
          />
          <_Button
            buttonTitle="Deny"
            style={{ width: 150, borderColor: "red" }}
          />
        </View>
      </View>
    </View>
  );
};

export default RequestCard;
