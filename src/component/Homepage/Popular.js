import React from "react";
import "../../CSS/popular.css";

const Popularitems = [
  {
    imageName: require("../../assets/image/th.jpeg"),
    name: "Pizza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida semper magna, non finibus libero rhoncus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    price: "Birr 300.00",
  },
  {
    imageName: require("../../assets/image/photo_2024-01-28_10-51-21.jpg"),
    name: "Kitfo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida semper magna, non finibus libero rhoncus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    price: "Birr 630.00",
  },
  {
    imageName: require("../../assets/image/th (3).jpeg"),
    name: "Burger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida semper magna, non finibus libero rhoncus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    price: "Birr 450.00",
  },
  {
    imageName: require("../../assets/image/photo_2024-01-28_10-48-30.jpg"),
    name: "Pasta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida semper magna, non finibus libero rhoncus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    price: "Birr 130.00",
  },
  {
    imageName: require("../../assets/image/imani-manyara-Bfy8z7EOyx4-unsplash.jpg"),
    name: "Chips",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida semper magna, non finibus libero rhoncus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    price: "Birr 200.00",
  },
  {
    imageName: require("../../assets/image/th (4).jpeg"),
    name: "Black Forest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida semper magna, non finibus libero rhoncus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    price: "Birr 120.00",
  },
];

function Popular() {
  return (
    <div className="popular">
      <div className="popular_title">
        <h2>Popular Dishes Of the Month</h2>
        <p>Choose Your Favourite food among these Top 6 dishes</p>
      </div>
      <div className="popular_foods">
        {Popularitems.map((popular) => (
          <div className="popular_food" key={popular.name}>
            <img src={popular.imageName} alt={popular.name} />
            <div className="food_detail">
              <h3>{popular.name}</h3>
              <p>{popular.description}</p>
              <div className="money_pop">
                <h4>{popular.price}</h4>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
