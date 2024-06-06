import React from "react";
import "./assets/CSS/App.css";
import Header from "./Header";
import Slider from "./Slider";
import Popular from "./Popular";
import Swipe from "./Swipe";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Popular />
      <Swipe />
      <Restaurant />
      <Footer />
    </div>
  );
}

export default App;
