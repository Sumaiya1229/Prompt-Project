import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import { popTime, time } from "../../redux/action/rootAction";
import Style from "./spCommon/spStyle";
const SpTimeAllocation = (props) => {
  const { container, timeSlotView, timeSlot, timeSLotSelected } = Style;
  const [data, setData] = useState({
    time: [
      "06:00AM",
      "07:00AM",
      "08:00AM",
      "09:00AM",
      "10:00AM",
      "11:00AM",
      "12:00PM",
      "01:00PM",
      "02:00PM",
      "03:00PM",
      "04:00PM",
      "05:00PM",
      "06:00PM",
      "07:00PM",
      "08:00PM",
      "09:00PM",
      "10:00PM",
      "11:00PM",
      "12:00AM",
    ],
    min: [15, 30, 45],
    selected: [],
  });
  const mount = useRef();
  useEffect(() => {
    if (!mount.current) {
      console.log("updatedss");
      mount.current = true;
    } else {
      // console.log(data.selected);
    }
  });
  const markup = (time) => {
    return (
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 30,
          marginBottom: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        key={time}
      >
        <Text style={{ fontSize: 20, marginRight: 10 }}>{time}</Text>
        {data.min.map((item) => (
          <View style={timeSlotView} key={`${time}-${item}`}>
            <Text style={{ fontSize: 18 }}>{item}</Text>
            <TouchableOpacity
              style={[
                timeSlot,
                props.data.time.includes(`${time}-${item}`) && timeSLotSelected,
              ]}
              onPress={() => {
                if (!props.data.time.includes(`${time}-${item}`)) {
                  props.addTime(`${time}-${item}`);
                  setData({
                    ...data,
                    selected: [...data.selected, `${time}-${item}`],
                  });
                } else {
                  const filter = props.data.time.filter(
                    (res) => res !== `${time}-${item}`
                  );
                  console.log(filter);
                  props.popTime(filter);
                  setData({ ...data, selected: filter });
                }
              }}
            />
          </View>
        ))}
      </View>
    );
  };
  return (
    <ScrollView style={{ marginBottom: 150 }}>
      {data.time.map((time) => markup(time))}
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return { data: state.spHome };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTime: (payload) => dispatch(time(payload)),
    popTime: (payload) => dispatch(popTime(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SpTimeAllocation);
