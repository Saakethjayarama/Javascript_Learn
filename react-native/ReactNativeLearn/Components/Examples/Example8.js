import React from "react";
import { View, StatusBar } from "react-native";

export default function () {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
          top: 200,
          left: 200,
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
        }}
      ></View>
    </View>
  );
}
