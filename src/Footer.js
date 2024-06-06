import React from "react";
import "./assets/CSS/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="about">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Praesent gravida semper magna, non finibus libero rhoncus et.
          <br />
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        </p>
      </div>
      <div className="Address">
        <h2>Address</h2>
        <p>Addis Ababa, Ethiopia</p>
        <p>Phone Number:+2512382731312</p>
      </div>
    </div>
  );
}

export default Footer;
