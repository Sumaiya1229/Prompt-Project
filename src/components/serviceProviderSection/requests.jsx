import React, { useState } from "react";
import { connect } from "react-redux";
import RequestCard from "./spCommon/requestCard";
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
const Requests = (props) => {
  return props.data.map((res, i) => {
    <RequestCard
      service={res.service}
      name={res.name}
      day={res.day}
      date={res.date}
      time={res.time}
    />;
  });
};
const mapStateToProps = (state) => {
  return { data: state.spRequests };
};
export default connect(mapStateToProps, null)(Requests);
