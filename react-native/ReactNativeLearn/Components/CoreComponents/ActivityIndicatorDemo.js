import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { StatusBar as Bar } from "expo-status-bar";

export default function () {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <ActivityIndicator size="large" color="yellow" />
      <ActivityIndicator size="large" color="tomato" animating={true} />
      <ActivityIndicator
        size="large"
        color="green"
        animating={true}
        hidesWhenStopped={true}
      />
      <ActivityIndicator size="large" color="green" animating={true} />
      <ActivityIndicator size={200} color="green" animating={true} />
      <Bar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
});
