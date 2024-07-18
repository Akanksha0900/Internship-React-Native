import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { Button, Card } from "react-native-paper";

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
        <Text style={{ marginLeft: 40, fontSize: 30, fontWeight: "bold" }}>
          MY REACT NATIVE APPLICATION
        </Text>

        <Card.Actions>
          <Button onPress={onsignUp}>signup</Button>
        </Card.Actions>
      </ImageBackground>
    </View>
  );
}
