import React from "react";
import { View, Text, StyleSheet, StatusBar, Button, Alert } from "react-native";
import { StatusBar as Bar } from "expo-status-bar";

export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.btnViewStyle}>
        <Button
          title="Tap me"
          disabled={false}
          onPress={() => {
            Alert.alert("APP", "You tapped", [
              {
                text: "Yes. 😝",
                onPress: () => {
                  console.log(":)");
                },
              },
              {
                text: "No. 🙄",
                onPress: () => {
                  console.log("So, It's me who'z lieing?");
                },
              },
            ]);
          }}
        />
      </View>
      <Bar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
  },
  btnViewStyle: {
    width: 200,
    padding: 2,
    backgroundColor: "grey",
  },
});
