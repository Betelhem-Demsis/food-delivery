import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import Popular from "./Popular";
import Swipe from "./Swipe";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import RestaurantPage from "./RestaurantPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={
              <div className="Home">
                <Header />
                <Slider />
                <Popular />
                <Swipe />
                <Restaurant />
                <Footer />
              </div>
            }
          />
          <Route
            path="/restaurants"
            element={
              <div className="Restaurantpage">
                <RestaurantPage />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="Login">
                <h1>hello</h1>
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="Register">
                <h1>hello</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
