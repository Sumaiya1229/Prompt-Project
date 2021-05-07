import React, { Component } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import SpTimeAllocation from "./../serviceProviderSection/spTimeAllocation";
import ClientTimeAlloc from "./clientTimeAlloc";
import ClientServiceSelect from "./clientServiceSelect";
class ClientHome extends Component {
  state = {
    height: 0,
    serviceModal: false,
    timeModal: false,
    service: "Select a service",
    subService: "Set a sub service",
  };
  //   componentDidUpdate = () => console.log(this.state.height);
  serviceModalHandler = () => {
    this.setState({ serviceModal: true });
  };
  timeModalHandler = () => {
    this.setState({ timeModal: true });
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
    return (
      <ScrollView>
        <MapView
          style={[{ height: height / 2, marginBottom: 30 }]}
          initialRegion={{
            latitude: 23.685,
            longitude: 90.3563,
            latitudeDelta: 6,
            longitudeDelta: 6,
          }}
        />
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.buttonStyle, { width: "80%", alignSelf: "center" }]}
            onPress={() => this.serviceModalHandler()}
          >
            <Text>Select service</Text>
          </TouchableOpacity>
          <Modal visible={this.state.serviceModal}>
            <ScrollView style={{ paddingHorizontal: 10 }}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingTop: 10,
                  }}
                  onPress={() => this.setState({ serviceModal: false })}
                >
                  <MaterialIcons name="cancel" size={35} color="red" />
                </TouchableOpacity>
                <ClientServiceSelect />
              </View>
            </ScrollView>
          </Modal>
          <Modal visible={this.state.timeModal}>
            <TouchableOpacity
              style={{ position: "absolute", right: 10, top: 10 }}
              onPress={() => this.setState({ timeModal: false })}
            >
              <MaterialIcons name="cancel" size={35} color="red" />
            </TouchableOpacity>
            <ClientTimeAlloc />
          </Modal>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { width: "90%", marginTop: 20, marginHorizontal: 10 },
          ]}
        >
          <Text>Book time</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  map: {
    // width: 600,
  },
  buttonStyle: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  pickerStyle: { width: "100%", borderWidth: 1, borderColor: "black" },
});

export default ClientHome;
