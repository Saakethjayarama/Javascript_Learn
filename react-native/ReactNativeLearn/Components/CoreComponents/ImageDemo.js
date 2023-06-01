import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { StatusBar as Bar } from "expo-status-bar";

export default function () {
  return (
    <View style={styles.container}>
      <Image source={require("../../app/assets/favicon.png")} />
      {/* If the image is stored locally */}

      <Image source={{ uri: "https://picsum.photos/id/237/200/300" }} />
      {/* If the image is stored on the internet */}
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
