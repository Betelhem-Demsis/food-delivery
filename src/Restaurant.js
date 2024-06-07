import React, { useState } from "react";
import "./assets/CSS/Restaurant.css";

const restaurantInfo = [
  {
    hotelimg: require("./assets/image/sheraton.jpg"),
    hotelname: "Sheraton Hotel",
    Address: "Addis Ababa, Ethiopia",
    category: "International",
  },
  {
    hotelimg: require("./assets/image/OIP.jpg"),
    hotelname: "Hilton Hotel",
    Address: "Addis Ababa, Ethiopia",
    category: "International",
  },
  {
    hotelimg: require("./assets/image/haile.jpg"),
    hotelname: "Haile Resort",
    Address: "Addis Ababa, Ethiopia",
    category: "International",
  },
  {
    hotelimg: require("./assets/image/totot.jpg"),
    hotelname: "Totot Hotel",
    Address: "Addis Ababa, Ethiopia",
    category: "Traditional",
  },
];

function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState("All_hotels");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="restaurant">
      <div className="res_title">
        <h1>Featured Restaurants</h1>
        <ul>
          <li>
            <button onClick={() => handleClick("All_hotels")}>All</button>
          </li>
          <li>
            <button onClick={() => handleClick("Traditional")}>
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
      <div className="hotels_list">
        {restaurantInfo
          .filter((hotel) =>
            selectedCategory === "All_hotels"
              ? true
              : hotel.category === selectedCategory
          )
          .map((hotel) => (
            <div className="hotel" key={hotel.hotelname}>
              <img src={hotel.hotelimg} alt={hotel.hotelname} />
              <div className="hotel_detail">
                <h3>{hotel.hotelname}</h3>
                <p>{hotel.Address}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Restaurant;
