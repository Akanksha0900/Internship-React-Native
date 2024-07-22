import React, { useContext } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper"; // Import IconButton from react-native-paper
import { UserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";

const Favorites = ({ navigation }) => {
  const { favorites } = useContext(UserContext);
  const handleGotoDashboardPage = () => {
    console.log("I m from Favorites page");

    navigation.navigate("Dashboard");
  };

  return (
    <>
      <Text
        style={{
          marginLeft: 40,
          marginTop: 50,
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        Your Favorites
      </Text>
      <Button
        onPress={handleGotoDashboardPage}
        style={{
          margin: 20,
          padding: 5,
          borderRadius: 25,
        }}
      >
        Back to Dashboard
      </Button>
      <ScrollView contentContainerStyle={styles.container}>
        {favorites.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <IconButton
              icon="heart"
              style={styles.heartIcon}
              onPress={() => {
                // Handle favorite button press
              }}
            />
          </Card>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  card: {
    width: "100%",
    marginBottom: 16,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    color: "red",
    right: 10,
  },
});

export default Favorites;
