import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  Switch,
} from "react-native";

export default function Signup({ oncompletionsignUp }) {
  const image = require("../assets/gettingstarted.jpg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ADD8E6"); // Default color cyan

  function handleCompleteSignUp() {
    oncompletionsignUp(name, email, password);
  }

  function toggleBackgroundColor(value) {
    const newColor = value ? "#ADD8E6" : "#D3D3D3"; // Cyan or light grey based on switch value
    setBackgroundColor(newColor);
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
          marginLeft: 120,
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 90,
        }}
      >
        SIGN UP
      </Text>

      <TextInput
        style={{
          marginLeft: 70,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
        }}
        placeholder="Enter your Name:"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={{
          marginLeft: 70,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
        }}
        placeholder="Enter your email:"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={{
          marginLeft: 70,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          fontSize: 20,
        }}
        placeholder="Enter your password:"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        style={{
          marginLeft: 70,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
        }}
        placeholder="confirm password:"
        secureTextEntry={true}
      />

      <Switch
        style={{ marginLeft: 70, marginTop: 20 }}
        value={backgroundColor === "#ADD8E6"}
        onValueChange={toggleBackgroundColor}
      />

      <Button
        title="Complete SIGN UP"
        color="green"
        onPress={handleCompleteSignUp}
      />
      {/* </ImageBackground> */}
    </View>
  );
}
