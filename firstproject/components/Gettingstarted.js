import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Card } from "react-native-paper";

export default function Gettingstarted({ navigation }) {
  const image = require("../assets/gettingstarted.jpg");

  const handleGotoSignUpPage = () => {
    console.log("I m from gettingstarted page");
    navigation.navigate("Signup");
  };
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
          <Button onPress={handleGotoSignUpPage}>signup</Button>
        </Card.Actions>
      </ImageBackground>
    </View>
  );
}
