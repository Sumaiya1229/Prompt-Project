import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
class ClientServiceSelect extends Component {
  state = {
    height: 0,
    showDateTimePicker: false,
    showTimeAlloc: false,
    service: "Select a service",
    subService: "Set a sub service",
    date: new Date(),
    serviceDate: "",
    time: "",
    mode: "",
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
  };
  serviceModalHandler = () => {
    this.setState({ serviceModal: true });
  };
  timeModalHandler = () => {
    this.setState({ timeModal: true });
  };
  componentDidUpdate = () => {
    // console.log(this.state.date);
  };
  render() {
    const serviceList = [
      "Select a service",
      "Barber",
      "Butcher",
      "Chef",
      "Spa",
      "Tuition",
      "Doctor",
      "Consultant",
    ];
    const subServiceList = {
      "Select a service": ["Select a service first"],
      Barber: ["Shave", "Haircut"],
      Butcher: ["Beef", "Lamb"],
      Chef: ["Continental", "Chinese"],
      Spa: ["Massage", "Sauna"],
      Tuition: ["SSC", "HSC"],
      Doctor: ["Pathology", "Homeopathy"],
      Consultant: ["Legal", "Engineering"],
    };
    const { width, height } = Dimensions.get("window");
    const { service, subService } = this.state;
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
          {this.state.min.map((item) => (
            <View style={styles.timeSlotView} key={`${time}-${item}`}>
              <Text style={{ fontSize: 18 }}>{item}</Text>
              <TouchableOpacity
                style={[
                  styles.timeSlot,
                  this.state.selected.includes(`${time}-${item}`) &&
                    styles.timeSLotSelected,
                ]}
                onPress={() => {
                  if (!this.state.selected.includes(`${time}-${item}`)) {
                    // this.props.addTime(`${time}-${item}`);
                    this.setState({
                      selected: [...this.state.selected, `${time}-${item}`],
                    });
                  } else {
                    const filter = this.state.selected.filter(
                      (res) => res !== `${time}-${item}`
                    );
                    // this.props.popTime(filter);
                    this.setState({ selected: filter });
                  }
                }}
              />
            </View>
          ))}
        </View>
      );
    };
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      const serviceDate = [...currentDate.toString().split(" ").slice(1, 4)];
      //   console.log(currentDate.toString().split(" ").slice(1, 4));
      this.setState({
        showDateTimePicker: Platform.OS === "ios",
        date: currentDate,
        serviceDate: { date: serviceDate[1], month: serviceDate[0] },
      });
    };

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16, marginTop: 50 }}>Select your service</Text>
        <Picker
          selectedValue={this.state.service}
          style={styles.pickerStyle}
          onValueChange={(e) => this.setState({ service: e })}
        >
          {serviceList.map((res) => (
            <Picker.Item
              key={res}
              label={res}
              value={res}
              color={res === "Select a service" && "#707070"}
            />
          ))}
        </Picker>
        <View
          style={{
            height: 0.8,
            width: "100%",
            backgroundColor: "#70707070",
            marginVertical: 25,
          }}
        ></View>
        <Text style={{ fontSize: 16 }}>Select a sub service</Text>
        <Picker
          selectedValue={this.state.subService}
          style={styles.pickerStyle}
          onValueChange={(e) => this.setState({ subService: e })}
        >
          {subServiceList[service].map((res) => (
            <Picker.Item
              key={res}
              label={res}
              value={res}
              color={res === "Select a service first" && "#707070"}
            />
          ))}
        </Picker>
        <View
          style={{
            height: 0.8,
            width: "100%",
            backgroundColor: "#70707070",
            marginVertical: 25,
          }}
        ></View>

        <Text style={{ fontSize: 16 }}>Select date and time</Text>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              this.state.service === "Select a service"
                ? Alert.alert("Select a service first!")
                : this.setState({
                    showDateTimePicker: this.state.showDateTimePicker
                      ? false
                      : true,
                    showTimeAlloc: false,
                  })
            }
          >
            <Text>Select date</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              this.state.service === "Select a service"
                ? Alert.alert("Select a service first!")
                : this.state.serviceDate === ""
                ? Alert.alert("Select a date first")
                : this.setState({
                    showTimeAlloc: this.state.showTimeAlloc ? false : true,
                  })
            }
          >
            <Text>Select Time</Text>
          </TouchableOpacity>
        </View>
        {this.state.showDateTimePicker && (
          <DateTimePicker
            minimumDate={new Date()}
            testID="dateTimePicker"
            value={this.state.date}
            mode={"date"}
            is24Hour={false}
            display="default"
            onChange={onChange}
          />
        )}
        {this.state.showTimeAlloc &&
          this.state.time.map((time) => markup(time))}

        {this.state.serviceDate !== "" && (
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "black",
              marginVertical: 10,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Month:</Text>{" "}
              {this.state.serviceDate.month}
            </Text>
            <Text style={{ fontSize: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Date:</Text>{" "}
              {this.state.serviceDate.date}
            </Text>
            {this.state.selected.map((item) => (
              <View key={item}>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
        )}
        <View
          style={{
            height: 0.8,
            width: "100%",
            backgroundColor: "#70707070",
            marginVertical: 25,
          }}
        ></View>
        <TouchableOpacity
          style={[styles.buttonStyle, { width: "100%", marginTop: 50 }]}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  map: {
    // width: 600,
  },
  buttonStyle: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  timeSlotView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  timeSlot: {
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
  pickerStyle: { width: "100%", borderWidth: 1, borderColor: "black" },
});
export default ClientServiceSelect;
