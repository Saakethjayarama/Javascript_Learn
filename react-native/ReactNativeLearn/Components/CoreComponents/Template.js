import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { StatusBar as Bar } from "expo-status-bar";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Bar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    color: "#ffffff",
  },
});
