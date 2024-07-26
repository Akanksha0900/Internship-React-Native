import React, { useContext, useEffect, useState } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper";
import { UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard = ({ navigation }) => {
  const [name, setName] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const { favorites } = state;

  useEffect(() => {
    async function fetchName() {
      const userDetailString = await AsyncStorage.getItem("userDetail"); //Fetches data in string format

      const userDetail = userDetailString ? JSON.parse(userDetailString) : {}; //converts the string format data into object if not empty else it creates an empty object.
      setName(userDetail.name);
    }
    fetchName();
  }, []); //used to fetch name from the async storage

  const toggleFavorite = (product) => {
    if (favorites.some((item) => item.id === product.id)) {
      dispatch({ type: "REMOVE_FROM_FAVORITE", payload: product.id }); //dispatch is like a function which passes the data to the reducer func to perform further function.Here we pass product id to the reducer which then filters out this element & removes from the favorites array
    } else {
      dispatch({ type: "ADD_TO_FAVORITE", payload: product }); //Here, the whole product is dispatched through payload to the reducer to add to the favorites array
    }
  };

  const handleGotoFavoritesPage = () => {
    console.log("I m from Dashboard page");

    navigation.navigate("Favorites");
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
