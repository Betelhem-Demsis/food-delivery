import React, { useState, useEffect } from "react";
import "../../assets/CSS/Home.css";
import peopleImage from "../../assets/image/peoplel2.jpg";
import carissaImage from "../../assets/image/carissa-gan-RwoKbjJdYvE-unsplash.jpg";
import pastaImage from "../../assets/image/pasta.jpg";
import photoImage from "../../assets/image/photo_5_2024-01-06_22-26-40.jpg";
import imaniImage from "../../assets/image/imani-manyara-Bfy8z7EOyx4-unsplash.jpg";

function Slider() {
  const [itemActive, setItemActive] = useState(0);
  const items = [
    {
      src: peopleImage,
      content: {
        title: "AGELGL FOR YOU",
        description: "Discover. Decide. Delivered.",
      },
    },
    {
      src: carissaImage,
      content: {
        title: "Choose a Restaurant",
        description: "Abundant Ethiopian Restaurants await your selection.",
      },
    },
    {
      src: pastaImage,
      content: {
        title: "Order Food",
        description:
          "Order the food you want from well-known Ethiopian hotels.",
      },
    },
    {
      src: photoImage,
      content: {
        title: "Traditional Foods",
        description:
          "Immerse yourself in the rich and vibrant flavors of Ethiopian cuisine.",
      },
    },
    {
      src: imaniImage,
      content: {
        title: "International Food",
        description:
          "A culinary journey across the globe! Indulge your taste buds with our diverse selection of international dishes.",
      },
    },
  ];

  const handleNext = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
  };

  const handlePrev = () => {
    setItemActive(
      (prevItemActive) => (prevItemActive - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  return (
    <div className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
          >
            <img src={item.src} alt="" />
            <div className="content">
              <h2>{item.content.title}</h2>
              <p>
                <b>{item.content.description}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={handlePrev}>{"<"}</button>
        <button onClick={handleNext}>{">"}</button>
      </div>
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={item.src} alt="" />
            <div className="content">Name Slider</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
