import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Card from "./card";

export default function Dashboard({ onlogout, userName, DATA }) {
  const image = require("../assets/gettingstarted.jpg");
  const Item = ({ item }) => (
    <Card
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

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
        <Text style={{ marginLeft: 50, fontSize: 20, fontWeight: "bold" }}>
          WELCOME {userName}
        </Text>

        {/* <FlatList
        data={DATA}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      /> */}

        <ScrollView>
          {DATA.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </ScrollView>

        <Button title="LOGOUT" color="red" onPress={onlogout} />
      </ImageBackground>
    </View>
  );
}
