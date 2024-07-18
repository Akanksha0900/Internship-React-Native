import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
import { useState } from "react";
// import { Button, Card } from "react-native-paper";

export default function Gettingstarted({ onsignUp }) {
  const image = require("../assets/gettingstarted.jpg");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADD8E6",
      }}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text style={{ marginLeft: 50, fontSize: 20, fontWeight: "bold" }}>
          MY REACT NATIVE APPLICATION
        </Text>

        <Button title="signup" color="green" onPress={onsignUp} />
      </ImageBackground>
    </View>
  );
}
