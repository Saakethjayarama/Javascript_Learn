import "react-native-gesture-handler";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  MaskedViewIOS,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ViewImageScreen from "./ViewImageScreen";

function Home({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.header}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        {/* <Text>Sell whatever you dont need</Text> */}
      </View>
      <View style={styles.loginButton}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            alignSelf: "center",
            top: 15,
          }}
        >
          Login
        </Text>
      </View>
      <View style={styles.registerButton}>
        <Text
          onPress={() => {
            navigation.navigate("ViewImage");
          }}
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            alignSelf: "center",
            top: 15,
          }}
        >
          Register
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  header: {
    position: "absolute",
    top: StatusBar.currentHeight,
    alignItems: "center",
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewImage" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




