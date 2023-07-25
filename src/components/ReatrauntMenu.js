import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const ReataurantMenu = () => {
  // Read the dynamic URL parameter
  const { resId } = useParams();


const [restaurant,menuItems] = useRestaurant(resId);
 
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
      
     
        <h2>{restaurant.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="Restaurant"
        />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} ★</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <div>
      
        <h1>Menu</h1>
        {menuItems.length > 0 ? (
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading menu items...</p>
        )}
      </div>
    </div>
  );
};

export default ReataurantMenu;
