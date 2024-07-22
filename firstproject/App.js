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

const Stack = createNativeStackNavigator();

export default function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [username, setusername] = useState("");
  const [showPage, setShowPage] = useState("getting-started");

  const handlesignup = () => {
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

  const handleLogout = () => {
    console.log("Button is being pressed!!");
    setShowPage("getting-started");
  };

  const handleFavorites = () => {
    setShowPage("Favorites");
  };

  const dashboarddata = (name, email, password) => {
    console.log("Button is being pressed!!");
    setusername(name);
    setEmail(email);
    setPassword(password);
    console.log("Name is:" + name);
    console.log("Email is:" + email);
    console.log("Password is:" + password);
    handleLogin();
  };

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
          </Stack.Navigator>

          {/* <View style={{ flex: 1, justifyContent: "center" }}>
            {showPage === "getting-started" && (
              <Gettingstarted onsignUp={handlesignup} />
              )}
              {showPage === "signup" && (
              <Signup oncompletionsignUp={dashboarddata} />
            )}
            {showPage === "login" && (
              <Login
              oncompletionlogin={dashboard}
                email={email}
                password={password}
              />
            )}
            {showPage === "dashboard" && (
              <Dashboard
              onLogout={handleLogout}
              userName={username}
              onFavorites={handleFavorites}
              DATA={DATA}
              />
              )}
              {showPage === "Favorites" && <Favorites onDashboard={dashboard} />}
              </View> */}
        </UserProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
