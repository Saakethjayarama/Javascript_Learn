import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { StatusBar as Bar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";

export default function () {
  const DATA = [
    {
      id: "abc",
      title: "FlatList 1",
    },
    {
      id: "def",
      title: "FlatList 2",
    },
    {
      id: "ghi",
      title: "FlatList 3",
    },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
  item: {
    backgroundColor: "#86b7f0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
