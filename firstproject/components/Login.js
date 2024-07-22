import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import { useState } from "react";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Login({ navigation }) {
  const image = require("../assets/gettingstarted.jpg");

  const route = useRoute();
  const name = route.params.name;
  const email = route.params.email;
  const password = route.params.password;

  const handleGotoDashboardPage = () => {
    console.log("I m from login page");

    navigation.navigate("Dashboard", {
      name,
    });
  };

  function validate() {
    if (email === loginEmail && password === loginPassword) {
      handleGotoDashboardPage();
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
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text
          style={{
            marginLeft: 70,
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 20,
            marginBottom: 40,
            borderRadius: 20,
          }}
        >
          WELCOME BACK!! LOGIN
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
          placeholder="Enter your email:"
          onChangeText={setloginEmail}
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
          onChangeText={setloginPassword}
        />

        <Card.Actions>
          <Button onPress={validate}>LOGIN</Button>
        </Card.Actions>
      </ImageBackground>
    </View>
  );
}
