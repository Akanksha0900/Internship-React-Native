import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
// import { provider as PaperProvider } from "react-native-paper";

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
    // <PaperProvider>
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
        <Dashboard onlogout={logout} userName={username} DATA={DATA} />
      )}
    </View>
    // </PaperProvider>
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
