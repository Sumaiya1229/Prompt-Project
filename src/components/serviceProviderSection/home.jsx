import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import SpTimeAllocation from "./spTimeAllocation";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import _Button from "./../_common/_components/_button";
import * as DocumentPicker from "expo-document-picker";
import { connect } from "react-redux";
import { promo, licensed } from "./../../redux/action/rootAction";
const HomeMarkup = (props) => {
  const [data, setData] = useState({
    toggleModal: false,
    toggleTimeAlloc: false,
    togglePromo: false,
    toggleLicense: false,
    promo: [],
    text: "",
    file: null,
    licensed: false,
  });
  const {
    toggleModal,
    toggleTimeAlloc,
    toggleLicense,
    togglePromo,
    text,
    file,
    licensed,
  } = data;
  const buttonMarkup = (title, e) => {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: "black",
          borderRadius: 10,
          padding: 5,
          width: 250,
          margin: 20,
          marginBottom: 0,
          justifyContent: "center",
        }}
        onPress={e}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginRight: 5,
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const uploadFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    setData({ ...data, file: result, licensed: true });
    props.licenseType(true);
    // alert(result.uri);
    console.log(data.file);
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 100,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Text>Choose Your Service(s)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Text>Request to add service</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={data.toggleModal}>
        <View>
          <TouchableOpacity
            style={{
              marginTop: 20,
              marginHorizontal: 20,
              alignSelf: "flex-end",
            }}
            onPress={() => {
              setData({
                ...data,
                toggleTimeAlloc: false,
                togglePromo: false,
                toggleModal: false,
              });
            }}
          >
            <MaterialIcons name="cancel" size={35} color="red" />
          </TouchableOpacity>
          {toggleTimeAlloc ? (
            <View>
              <ScrollView style={{ marginVertical: 5 }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginHorizontal: 20,
                  }}
                >
                  Time Allocation
                </Text>
                <SpTimeAllocation />
              </ScrollView>
            </View>
          ) : togglePromo ? (
            <View style={{ margin: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Promotion
              </Text>
              <TextInput
                style={{
                  height: 35,
                  fontSize: 18,
                  width: "100%",
                  borderColor: "#2980b9",
                  borderBottomWidth: 2,
                  marginBottom: 15,
                }}
                onChangeText={(e) => setData({ ...data, text: e })}
                value={text}
              />
              <_Button
                buttonTitle="Submit"
                style={{ width: 150, marginTop: 10 }}
                onPressButton={() => {
                  // promo.push[data.text];
                  // console.log(data.promo);
                  props.addPromo(data.text);
                  setData({
                    ...data,
                    text: "",
                    promo: [...data.promo, data.text],
                  });
                }}
              />
              <ScrollView style={{ marginVertical: 5 }}>
                {props.data.promo.map((promo) => (
                  <View
                    key={promo}
                    style={{
                      height: 40,
                      marginBottom: 10,
                      borderWidth: 2,
                      borderColor: "black",
                      borderRadius: 2,
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Text style={{ marginHorizontal: 5, fontSize: 20 }}>
                      <Text style={{ fontWeight: "bold", marginRight: 20 }}>
                        Promo code:
                      </Text>
                      <Text>{promo}</Text>
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          ) : toggleLicense ? (
            <View>
              <Image
                source={{
                  uri: props.data.licensed
                    ? "https://i.ibb.co/Mkg54km/blue.png"
                    : "https://i.ibb.co/VCwk02X/orange.png",
                }}
                style={{ height: 70, width: 70, alignSelf: "center" }}
              />
              <_Button
                buttonTitle="Non Professional"
                style={{ marginHorizontal: 20, marginTop: 10 }}
                onPressButton={() => {
                  setData({ ...data, licensed: false, file: null });
                  props.licenseType(false);
                }}
              />
              <Text style={{ fontSize: 25, alignSelf: "center" }}>
                ------OR------
              </Text>
              <_Button
                buttonTitle="Professional"
                style={{ marginHorizontal: 20, marginTop: 10 }}
                onPressButton={() => {
                  uploadFile();
                  // setData({ ...data, licensed: true });
                }}
              />
              {file ? (
                <View>
                  <Text style={{ fontSize: 18, marginHorizontal: 20 }}>
                    {file.name}
                  </Text>
                  <_Button
                    buttonTitle="Upload"
                    style={{ marginHorizontal: 20, width: 150, marginTop: 10 }}
                  />
                </View>
              ) : null}
            </View>
          ) : null}
        </View>
      </Modal>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 50,
        }}
      >
        {buttonMarkup("Time Allocation", () => {
          setData({ ...data, toggleTimeAlloc: true, toggleModal: true });
        })}
        {buttonMarkup("Promotion", () => {
          setData({ ...data, togglePromo: true, toggleModal: true });
        })}
        {buttonMarkup("License type", () => {
          setData({ ...data, toggleLicense: true, toggleModal: true });
        })}
        {buttonMarkup("Renew Liscence", () => console.log("Renew Liscence"))}
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  console.log(state.spHome.licensed);
  return { data: state.spHome };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPromo: (payload) => dispatch(promo(payload)),
    licenseType: (payload) => dispatch(licensed(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeMarkup);
