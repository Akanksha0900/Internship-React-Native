import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Signup({ oncompletionsignUp }) {
  //   const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [name, setName] = useState("");

  function handleCompleteSignUp() {
    oncompletionsignUp(name);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#ADD8E6",
      }}
    >
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
      <Button
        title="Complete SIGN UP"
        color="green"
        onPress={() => oncompletionsignUp(name, email, password)}
      />
    </View>
  );
}
