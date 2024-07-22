// import "./gesture-handler";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import Favorites from "./components/Favorites";
import Gettingstarted from "./components/Gettingstarted";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Gettingstarted">
      <Drawer.Screen name="Gettingstarted" component={Gettingstarted} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name=" Dashboard" component={Dashboard} />
      <Drawer.Screen name=" Favorites" component={Favorites} />
      <Drawer.Screen name="Logout" component={Gettingstarted} />
    </Drawer.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gettingstarted" component={Gettingstarted} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Favourite" component={Favorites} />
    </Tab.Navigator>
  );
}

function MyStacks() {
  <Stack.Navigator initialRouteName="Gettingstarted">
    <Stack.Screen
      name="Gettingstarted"
      component={Gettingstarted}
      options={{
        title: "GETTING STARTED",
      }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{
        title: "SIGNUP SCREEN",
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: "LOGIN SCREEN",
      }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: "DASHBOARD SCREEN",
      }}
    />
    <Stack.Screen
      name="Favorites"
      component={Favorites}
      options={{
        title: "FAVORITES SCREEN",
      }}
    />
  </Stack.Navigator>;
}
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <UserProvider>
          {/* <MyStacks />
          <MyTabs /> */}
          <MyDrawer />
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
