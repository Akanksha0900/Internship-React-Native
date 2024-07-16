import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Gettingstarted({ onsignUp }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADD8E6",
      }}
    >
      <Text style={{ marginLeft: 50, fontSize: 20, fontWeight: "bold" }}>
        MY REACT NATIVE APPLICATION
      </Text>

      <Button title="SIGN UP" color="green" onPress={onsignUp} />
    </View>
  );
}
