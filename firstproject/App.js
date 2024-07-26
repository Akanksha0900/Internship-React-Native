import React from "react";
import { UserProvider } from "./context/UserContext";
import Favorites from "./components/Favorites";
import Gettingstarted from "./components/Gettingstarted";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Function called within DashboardStack function, to show the drawer only inside Dashboard page.
function MyDrawer({ navigation }) {
  // Created LogOut function here to use within the drawer, as if we call Gettingstarted method, the drawer will exist in GettingStarted page as well.
  function LogOut() {
    navigation.navigate("Gettingstarted");
  }

  return (
    //Shows the drawer in dashboard & favorites pages
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Favorites" component={Favorites} />
      <Drawer.Screen name="Log Out" component={LogOut} />
    </Drawer.Navigator>
  );
}

//Created a new function which gets triggerred after successful login. This func calls MyDrawer function within the Stack Navigator which helps us create a drawer in dashboard page.
function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="MyDrawer">
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <UserProvider>
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
              name="DashboardStack"
              component={DashboardStack}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
