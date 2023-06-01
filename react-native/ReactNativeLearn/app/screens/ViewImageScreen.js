import React from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import { StatusBar as Bar } from "expo-status-bar";

export default function () {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "pink",
          position: "absolute",
          top: StatusBar.currentHeight,
          left: 0,
        }}
      />
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "green",
          position: "absolute",
          top: StatusBar.currentHeight,
          right: 0,
        }}
      />
      <Image style={styles.img} source={require("../assets/chair.jpg")} />
      <Bar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  img: {
    width: "100%",
    height: "70%",
  },
});
