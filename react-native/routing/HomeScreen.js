import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen(props) {
  console.log(props);

  return (
    <View style={styles.container}>
      <Text>You have (undefined) friends</Text>
      <Button
        title="Add Friends"
        onPress={() => props.navigation.navigate("Friends")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
