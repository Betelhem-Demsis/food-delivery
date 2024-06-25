import React from "react";
import "./CSS/App.css";
import Header from "./component/Homepage/Header";
import Slider from "./component/Homepage//Slider";
import Popular from "./component/Homepage//Popular";
import Swipe from "./component/Homepage//Swipe";
import Hotels from "./component/Homepage/Hotels";
import Footer from "./component/Homepage//Footer";
import Login from "./component/loginpage/Login";
import Restaurants from "./component/Restaurantpg/Restaurants";
import Register from "./component/registerpage/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Slider />
              <Popular />
              <Swipe />
              <Hotels />
              <Footer />
            </>
          }
        />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
