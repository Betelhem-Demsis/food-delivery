import React from "react";
import "./CSS/App.css";
import Header from "./component/Homepage/Header";
import Slider from "./component/Homepage//Slider";
import Popular from "./component/Homepage//Popular";
import Swipe from "./component/Homepage//Swipe";
import Restaurant from "./component/Homepage//Restaurant";
import Footer from "./component/Homepage//Footer";

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
