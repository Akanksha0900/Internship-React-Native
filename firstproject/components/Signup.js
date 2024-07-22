import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Card } from "react-native-paper";

export default function Signup({ navigation }) {
  const image = require("../assets/gettingstarted.jpg");

  const handleGotoLoginPage = () => {
    console.log("I m from signup page");

    navigation.navigate("Login", {
      name,
      email,
      password,
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ADD8E6"); // Default color cyan

  function handleCompleteSignUp() {
    oncompletionsignUp(name, email, password);
  }

  function toggleBackgroundColor() {
    setBackgroundColor(setRandomColor());
  }

  function setRandomColor() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: backgroundColor,
      }}
    >
      {/* <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      > */}
      <Text
        style={{
          color: "black",
          marginLeft: 140,
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        SIGN UP
      </Text>

      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="Enter your Name:"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="Enter your email:"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="Enter your password:"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="confirm password:"
        secureTextEntry={true}
      />

      {/* <Switch
        style={{ marginLeft: 70, marginTop: 20 }}
        value={backgroundColor === "#ADD8E6"}
        onValueChange={toggleBackgroundColor}
      /> */}

      <Card.Actions>
        <Button onPress={handleGotoLoginPage} mode="elevated">
          Complete SIGN UP
        </Button>
      </Card.Actions>
      <Card.Actions>
        <Button onPress={toggleBackgroundColor} mode="elevated">
          Click here to change
        </Button>
      </Card.Actions>
      {/* </ImageBackground> */}
    </View>
  );
}
