import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Card from "./card";

export default function Dashboard({ onlogout, userName }) {
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
        WELCOME {userName}
      </Text>

      <SafeAreaView>
        {/* <Card
          title="Card Title 1"
          image="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/s/q/6-5-ck2948-110nike-9-nike-white-black-original-imagfw7t7jvcamtf-bb.jpeg?q=70&crop=false"
          description="This is the image for card 1 of shoe1."
        /> */}
        <Card
          title="Card Title 2"
          image="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/0/b/-original-imahyxv7eesckkbb.jpeg?q=70&crop=false"
          description="This is the image for card 2 of shoe2."
        />
        <Card
          title="Card Title 3"
          image="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/d/7/x/-original-imah2czkut8ekujm.jpeg?q=70&crop=false"
          description="This is the image for card 3 of shoe3."
        />
      </SafeAreaView>

      <Button title="LOGOUT" color="red" onPress={onlogout} />
    </View>
  );
}
