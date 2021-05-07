import React from "react";
import {} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../components/clientSection/ClientLanding";
const Tab = createMaterialBottomTabNavigator();

const ClientBottomNav = () => {
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default ClientBottomNav;
