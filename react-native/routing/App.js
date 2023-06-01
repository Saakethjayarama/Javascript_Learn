import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// imports
import HomeScreen from "./HomeScreen";
import FriendsScreen from "./FriendsScreen";
import Screen3 from "./Screen3";
import Top1 from "./Top1";
import Top2 from "./Top2";
import Top3 from "./Top3";

import Bottom1 from "./Bottom1";
import Bottom2 from "./Bottom2";
import Bottom3 from "./Bottom3";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTobTabs = createMaterialTopTabNavigator();

const StackComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="Frns" component={FriendsScreen} />
    </Stack.Navigator>
  );
};

const MaterialTopTabsComponent = () => {
  return (
    <MaterialTobTabs.Navigator>
      <MaterialBottomTabs.Screen name="Top1" component={Top1} />
      <MaterialBottomTabs.Screen name="Top2" component={Top2} />
      <MaterialBottomTabs.Screen name="Top3" component={Top3} />
    </MaterialTobTabs.Navigator>
  );
};

const MaterialBottomTabsComponent = () => {
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Bottom1" component={Bottom1} />
      <MaterialBottomTabs.Screen name="Bottom2" component={Bottom2} />
      <MaterialBottomTabs.Screen name="Bottom3" component={Bottom3} />
    </MaterialBottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Screen1" children={StackComponent} />
        <Drawer.Screen name="Screen2" children={MaterialTopTabsComponent} />
        <Drawer.Screen name="Screen3" children={MaterialBottomTabsComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
