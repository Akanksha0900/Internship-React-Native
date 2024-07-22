import React, { useContext } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper";
import { UserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";

const Dashboard = ({ navigation }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(UserContext);

  const route = useRoute();
  const name = route.params.name;
  const toggleFavorite = (product) => {
    if (favorites.some((item) => item.id === product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const handleGotoFavoritesPage = () => {
    console.log("I m from Dashboard page");

    navigation.navigate("Favorites", {
      name,
    });
  };

  const handleLogoutPage = () => {
    console.log("I m from Dashboard page");

    navigation.navigate("Gettingstarted");
  };

  const DATA = [
    {
      id: "1",
      title: "First Item",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/s/q/6-5-ck2948-110nike-9-nike-white-black-original-imagfw7t7jvcamtf-bb.jpeg?q=70&crop=false",
      description: "This is the image for card 1 of shoe1.",
    },
    {
      id: "2",
      title: "Second Item",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/0/b/-original-imahyxv7eesckkbb.jpeg?q=70&crop=false",
      description: "This is the image for card 2 of shoe2.",
    },
    {
      id: "3",
      title: "Third Item",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/d/7/x/-original-imah2czkut8ekujm.jpeg?q=70&crop=false",
      description: "This is the image for card 3 of shoe3.",
    },
    {
      id: "4",
      title: "First Item",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/s/q/6-5-ck2948-110nike-9-nike-white-black-original-imagfw7t7jvcamtf-bb.jpeg?q=70&crop=false",
      description: "This is the image for card 1 of shoe1.",
    },
    {
      id: "5",
      title: "Second Item",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/0/b/-original-imahyxv7eesckkbb.jpeg?q=70&crop=false",
      description: "This is the image for card 2 of shoe2.",
    },
    {
      id: "6",
      title: "Third Item",
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/d/7/x/-original-imah2czkut8ekujm.jpeg?q=70&crop=false",
      description: "This is the image for card 3 of shoe3.",
    },
  ];

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
        Welcome, {name}
      </Text>

      <ScrollView contentContainerStyle={styles.container}>
        {DATA.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <IconButton
                style={{ color: "red" }}
                icon={
                  favorites.some((fav) => fav.id === item.id)
                    ? "heart"
                    : "heart-outline"
                }
                onPress={() => toggleFavorite(item)}
                iconColor="red"
              />
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      <Card.Actions>
        <Button
          onPress={handleLogoutPage}
          style={{
            marginRight: 70,
            padding: 5,
            borderRadius: 25,
          }}
        >
          Log Out
        </Button>
        <Button
          onPress={handleGotoFavoritesPage}
          style={{
            margin: 20,
            padding: 5,
            borderRadius: 25,
          }}
        >
          View Favorites
        </Button>
      </Card.Actions>
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
});

export default Dashboard;
