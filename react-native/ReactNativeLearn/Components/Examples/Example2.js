import { View, StyleSheet, Button, Text, Alert } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Example2() {
  return (
    <View style={styles.container}>
      <Button
        color="#dead69"
        title="click me!"
        onPress={() => {
          alert("Button clicked!");
        }}
      />
      <Text>Normal alert message</Text>
      <Text></Text>
      <Button
        color="#000"
        title="click me!"
        onPress={() => {
          Alert.alert("My Title", "My message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("Yes clicked");
              },
            },
            {
              text: "No",
              onPress: () => {
                console.log("No clicked");
              },
            },
          ]);
        }}
      />
      <Text>Customised alert</Text>
      <Text></Text>
      {/* Alert.prompt is not compatible with android for now */}
      <Button
        color="red"
        title="click me!"
        onPress={() => {
          Alert.prompt("Mytitle", "Mymessage", (text) => {
            console.log(text);
          });
        }}
      />
      <Text>Prompt is not compatible with android for now</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
