import React from "react";
import { Text, View } from "react-native";
import _Button from "../../_common/_components/_button";
import Style from "./spStyle";

const RequestCard = (props) => {
  const { container, cardView } = Style;
  const { service, name, day, date, time } = props;
  return (
    <View>
      <View style={cardView}>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>{service}</Text>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>{name}</Text>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>{day}</Text>
        <Text style={{ fontSize: 18 }}>{date}</Text>
        <Text style={{ fontSize: 18 }}>{time}</Text>
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
