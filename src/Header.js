import React from "react";
import "./Header.css";
import logo from "./images/logo-no-background.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" />
      </div>
      <div className="header_right">
        <Link to="/home">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Header;
