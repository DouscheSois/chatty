import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Css
import "./App.css";

// Components
import Footer from "./components/layout/Footer";
import Navbar from "./components/Navbar";

// Screens
import HomeScreen from "./screens/homescreen/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/admin/userlist" component={UserListScreen} />
      <Route path="/admin/user/:id/edit" component={UserEditScreen} />
      <Footer />
    </Router>
  );
};

export default App;
