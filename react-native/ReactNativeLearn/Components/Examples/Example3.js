import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import { StatusBar as Bar } from "expo-status-bar";

export default function Example3() {
  return (
    <View style={styles.container}>
      <Text style={styles.textx}>Saaketh</Text>
      <Bar style={styles.status} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  textx: {
    backgroundColor: "yellow",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
