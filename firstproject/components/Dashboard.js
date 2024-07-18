import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { useState } from "react";
// import Card from "./card";

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
            <Card key={item.id} style={styles.card}>
              <Card.Cover source={{ uri: item.image }} />
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>

        <Card.Actions>
          <Button onPress={onlogout}>LOGOUT</Button>
        </Card.Actions>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  card: {
    width: "100%",
    marginBottom: 16,
  },
});
