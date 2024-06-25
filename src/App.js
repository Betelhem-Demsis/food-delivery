import React from "react";
import "./CSS/App.css";
import Header from "./component/Homepage/Header";
import Slider from "./component/Homepage//Slider";
import Popular from "./component/Homepage//Popular";
import Swipe from "./component/Homepage//Swipe";
import Restaurant from "./component/Homepage//Restaurant";
import Footer from "./component/Homepage//Footer";
import Login from "./component/loginpage/Login";
import RestaurantPage from "./component/Restaurantpg/RestaurantPage";
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
              <Restaurant />
              <Footer />
            </>
          }
        />
        <Route path="/Restaurants" element={<RestaurantPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
