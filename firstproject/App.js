import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

import Gettingstarted from "./components/Gettingstarted";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

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
  const logout = () => {
    console.log("Button is being pressed!!");
    setShowPage("getting-started");
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
    <View style={{ flex: 1, justifyContent: "center" }}>
      {showPage === "getting-started" && (
        <Gettingstarted onsignUp={handlesignup} />
      )}
      {showPage === "signup" && <Signup oncompletionsignUp={dashboarddata} />}
      {showPage === "login" && (
        <Login
          oncompletionlogin={dashboard}
          email={email}
          password={password}
        />
      )}
      {showPage === "dashboard" && (
        <Dashboard onlogout={logout} userName={username} />
      )}
    </View>
  );

  // const setscreen = () => {
  //   switch (showPage) {
  //     case "getting-started":
  //       return <Gettingstarted onsignUp={handlesignup} />;
  //       break;
  //     case "signup":
  //       return <Signup oncompletionsignUp={Login} />;
  //       break;
  //     case "login":
  //       return <Login oncompletionlogin={Dashboard} />;
  //       break;
  //     case "dashboard":
  //       return <Dashboard onlogout={logout} />;
  //       break;
  //   }
  // };
  // return { setscreen()};
}
