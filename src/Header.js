import React from "react";
import "./Header.css";
import logo from "./images/logo-no-background.png";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" />
      </div>
      <div className="header_right">
        <a href="#">Home</a>
        <a href="#">Restaurants</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </div>
  );
}
export default Header;
