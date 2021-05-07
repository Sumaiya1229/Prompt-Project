import React from "react";
import {} from "react-native";
import {
  Profile,
  Feedback,
  Request,
  Home,
} from "./../components/serviceProviderSection/spLanding";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createMaterialBottomTabNavigator();

const SpProviderBottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#34495e"
        inactiveColor="#ababab"
        barStyle={{ backgroundColor: "#ffff", elevation: 20 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Feedback"
          component={Feedback}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="feedback" size={24} color={color} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Request"
          component={Request}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="format-list-bulleted"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default SpProviderBottomNav;
