import React, { useState } from "react";
import "./RestaurantCard.css";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Shirvanshah",
      rating: 4.8,
      cuisine: "Azerbaijan",
      img: "https://kongres-magazine.eu/wp-content/uploads/2019/11/shirvansah_resturant_baku2.jpg?x27798",
    },
    {
      id: 2,
      name: "Gusto Moderno",
      rating: 4.5,
      cuisine: "Italian",
      img: "https://avatars.mds.yandex.net/get-altay/10632051/2a0000019230719d7600475c489677867f39/L_height",
    },
    {
      id: 3,
      name: "Marivanna",
      rating: 4.7,
      cuisine: "Russian",
      img: "https://i.pinimg.com/736x/77/23/ce/7723cedfa9bed65df504580c17fdda52.jpg",
    },
  ]);
  return (
    <div>
      <div className="container">
        {restaurants.map((food) => (
          <div className="card" key={food.id}>
            <div className="food-img">
              <img src={food.img} alt={food.name} />
            </div>
            <div className="card-content">
              <h2 className="food-name">{food.name}</h2>
              <p className="cuisine">Cuisine: {food.cuisine}</p>
              <p className="rating">
                <FaStar className="star" />
                {food.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
