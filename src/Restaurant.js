import React, { useState } from "react";
import "./Restaurant.css";
import pics from "./image/sheraton.jpg";
import pich from "./image/OIP.jpg";
import pict from "./image/totot.jpg";
import picha from "./image/haile.jpg";

function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState("All_hotels");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="restuarant">
      <div className="res_title">
        <h1>Featured Restaurants</h1>
        <ul>
          <li>
            <button onClick={() => handleClick("All_hotels")}>All</button>
          </li>
          <li>
            <button onClick={() => handleClick("traditional")}>
              Traditional
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("International")}>
              International
            </button>
          </li>
        </ul>
      </div>
      {selectedCategory === "All_hotels" && (
        <div className="All_hotels">
          <div className="hotel">
            <img src={pics} alt=""></img>
            <div className="hotel_detail">
              <h3>Addis Sheraton Hotel</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="hotel">
            <img src={pich} alt=""></img>
            <div className="hotel_detail">
              <h3>Hilton Hotel</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="hotel">
            <img src={picha} alt=""></img>
            <div className="hotel_detail">
              <h3>Haile Resort</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="hotel">
            <img src={pict} alt=""></img>
            <div className="hotel_detail">
              <h3>Totot Hotel</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      )}
      {selectedCategory === "traditional" && (
        <div className="traditional">
          <div className="hotel">
            <img src={pict} alt=""></img>
            <div clssName="hotel_detail">
              <h3>Totot Hotel</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="hotel">
            <img src={pict} alt=""></img>
            <div className="hotel_detail">
              <h3>Totot Hotel</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      )}
      {selectedCategory === "International" && (
        <div className="International">
          <div className="hotel">
            <img src={pics} alt=""></img>
            <div className="hotel_detail">
              <h3>Addis Sheraton Hotel</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="hotel">
            <img src={pich} alt=""></img>
            <div className="hotel_detail">
              <h3>Sheraton Hotel</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Restaurant;
