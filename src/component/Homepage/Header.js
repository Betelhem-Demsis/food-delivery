import React from "react";
import "../../CSS/Header.css";
import logo from "../../assets/image/logo-no-background.png";
import { Link } from "react-router-dom";
import { LinkOff } from "@mui/icons-material";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" />
      </div>
      <ul className="header_right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/RestaurantPage">Restaurants</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
