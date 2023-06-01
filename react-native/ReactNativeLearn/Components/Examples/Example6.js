import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { StatusBar as Bar } from "expo-status-bar";

export default function () {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          flex: 0.5,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 4,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 0.5,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    // flexDirection: "column-reverse",
    // flexDirection: "row-reverse",
  },
});
