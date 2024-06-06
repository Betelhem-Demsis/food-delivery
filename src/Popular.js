import React from "react";
import food from "./assets/image/th.jpeg";
import food2 from "./assets/image/photo_2024-01-28_10-48-07.jpg";
import food3 from "./assets/image/th (3).jpeg";
import food4 from "./assets/image/photo_2024-01-28_10-51-21.jpg";
import food5 from "./assets/image/imani-manyara-Bfy8z7EOyx4-unsplash.jpg";
import food6 from "./assets/image/th (4).jpeg";

import "./assets/CSS/popular.css";

function Popular() {
  return (
    <div className="popular">
      <div className="popular_title">
        <h2>Popular Dishes Of the Month</h2>
        <p>Choose Your Favourite food among these Top 6 dishes</p>
      </div>
      <div className="popular_foods">
        <div className="popular_food">
          <img src={food} alt="" />
          <div className="food_detail">
            <h3>Pizza</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida semper magna, non finibus libero rhoncus et. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;
            </p>
            <div className="money_pop">
              <h4>Birr 300.00</h4>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className="popular_food">
          <img src={food4} alt="" />
          <div className="food_detail">
            <h3>Kitfo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida semper magna, non finibus libero rhoncus et. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;
            </p>
            <div className="money_pop">
              <h4>Birr 630.00</h4>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className="popular_food">
          <img src={food3} alt="" />
          <div className="food_detail">
            <h3>Burger</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida semper magna, non finibus libero rhoncus et. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;
            </p>
            <div className="money_pop">
              <h4>Birr 400.00</h4>
              <button>Order now</button>
            </div>
          </div>
        </div>
        <div className="popular_food">
          <img src={food2} alt="" />
          <div className="food_detail">
            <h3>Cake</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida semper magna, non finibus libero rhoncus et. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;
            </p>
            <div className="money_pop">
              <h4>Birr 130.00</h4>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className="popular_food">
          <img src={food5} alt="" />
          <div className="food_detail">
            <h3>Chips</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida semper magna, non finibus libero rhoncus et. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;
            </p>
            <div className="money_pop">
              <h4>Birr 200.00</h4>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className="popular_food">
          <img src={food6} alt="" />
          <div className="food_detail">
            <h3>Black Forest</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              gravida semper magna, non finibus libero rhoncus et. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae;
            </p>
            <div className="money_pop">
              <h4>Birr 120.00</h4>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
