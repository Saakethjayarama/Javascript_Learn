import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function () {
  console.log("Window Dimensions");
  console.log(Dimensions.get("window"));

  console.log("Screen Dimensions");
  console.log(Dimensions.get("screen"));
  return (
    <View style={styles.container}>
      <View style={styles.navbar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  navbar: {
    width: "100%",
    height: 70,
    backgroundColor: "orange",
  },
});
