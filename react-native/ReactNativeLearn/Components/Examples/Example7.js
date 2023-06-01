import React from "react";
import { View, StatusBar } from "react-native";

export default function () {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // flexWrap: "nowrap",//Default
        // flexWrap: "wrap",
        alignContent: "center",
        // justifyContent: "space-evenly",
        // alignItems: "flex-end",
      }}
    >
      <View
        style={{
          width: 300,
          height: 100,
          flexShrink: 1,
          backgroundColor: "dodgerblue",
          //   alignSelf: "flex-start",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
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
