import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [showPage, setShowPage] = useState("getting-started");
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loginEmail, setloginEmail] = useState(" ");
  const [loginPassword, setloginPassword] = useState(" ");

  //

  const signup = () => {
    console.log("Button is being pressed!!");
    setShowPage("signup");
  };

  const handleLogin = () => {
    console.log("Button is being pressed!!");
    setShowPage("login");
  };
  const dashboard = () => {
    console.log("Button is being pressed!!");
    setShowPage("dashboard");
  };
  const logout = () => {
    console.log("Button is being pressed!!");
    setShowPage("getting-started");
  };

  // GETTING STARTED PAGE
  if (showPage === "getting-started") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          backgroundColor: "#ADD8E6",
        }}
      >
        <Text style={{ marginLeft: 50, fontSize: 20, fontWeight: "bold" }}>
          MY REACT NATIVE APPLICATION
        </Text>

        <Button title="SIGN UP" color="green" onPress={signup} />
      </View>
    );
  }
  //SIGN UP PAGE
  else if (showPage === "signup") {
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
        <Button title="Complete SIGN UP" color="green" onPress={handleLogin} />
      </View>
    );
  }
  //LOGIN PAGE
  else if (showPage === "login") {
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
          This is our LOGIN page
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

        <Button title="LOGIN" color="green" onPress={dashboard} />
      </View>
    );
  }
  //DASHBOARD PAGE
  else if (showPage === "dashboard") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          backgroundColor: "#ADD8E6",
        }}
      >
        <Text style={{ marginLeft: 50, fontSize: 20, fontWeight: "bold" }}>
          THIS IS THE FINAL RESULT
        </Text>

        <Button title="LOGOUT" color="red" onPress={logout} />
      </View>
    );
  }
}
