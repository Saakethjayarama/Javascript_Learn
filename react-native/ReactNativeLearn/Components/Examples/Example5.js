import { View, StyleSheet } from "react-native";
import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function () {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: landscape ? "100%" : "30%",
          backgroundColor: "orange",
        }}
      ></View>
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
    height: "30%",
    backgroundColor: "orange",
  },
});
