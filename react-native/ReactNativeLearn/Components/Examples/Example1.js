import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";

export default function Example1() {
  let name = "saaketh";
  const pressHandler = () => {
    console.log("Dont hurt me by pressing hard :(");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle} onPress={pressHandler}>
        Hey {name}, how are you doing?
      </Text>

      <Text></Text>

      <Text numberOfLines={2} style={styles.textStyle}>
        Hi I am Saaketh, Studying in 4th semester Jyothy institute of
        Technology. At Jyothy institute of Technology I had an opportunity to
        attend in house internship conducted by codelabs under the department of
        ComputerScience and Engineering.
      </Text>

      <TouchableOpacity>
        <Image source={require("../../app/assets/favicon.png")} />
      </TouchableOpacity>

      <TouchableWithoutFeedback
        onPress={() => {
          console.log("You touched on image");
        }}
      >
        <Image
          blurRadius={0}
          fadeDuration={1000}
          style={styles.img}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </TouchableWithoutFeedback>
      <Text />
      <TouchableHighlight>
        <Image
          style={styles.img}
          width={20}
          height={20}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </TouchableHighlight>
      <Text />
      <TouchableNativeFeedback>
        <View
          style={{ width: 100, height: 100, backgroundColor: "blue" }}
        ></View>
      </TouchableNativeFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dead69",
    paddingTop: 22,
  },
  textStyle: {
    padding: 22,
  },
  img: {
    width: 100,
    height: 100,
    position: "relative",
    left: 22,
  },
});
