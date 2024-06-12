import React from "react";
import "../../assets/CSS/Header.css";
import logo from "../../assets/image/logo-no-background.png";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" />
      </div>
      <ul className="header_right">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Restaurants</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
