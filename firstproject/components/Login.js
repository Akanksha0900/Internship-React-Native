import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Login({ oncompletionlogin, email, password }) {
  function validate() {
    if (email === loginEmail && password === loginPassword) {
      oncompletionlogin();
    } else {
      alert("INVALID CREDENTIAL");
    }
  }
  const [loginEmail, setloginEmail] = useState(" ");
  const [loginPassword, setloginPassword] = useState(" ");
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
        LOGIN page
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
        placeholder="Enter your email:"
        onChangeText={setloginEmail}
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
        onChangeText={setloginPassword}
      />

      <Button title="LOGIN" color="green" onPress={validate} />
    </View>
  );
}
