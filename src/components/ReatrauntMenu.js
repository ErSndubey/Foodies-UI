import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const ReataurantMenu = () => {
  // Read the dynamic URL parameter
  const { resId } = useParams();

  // State to hold restaurant information
  const [restaurant, setRestaurant] = useState({});

  // State to hold menu items
  const [menuItems, setMenuItems] = useState([]);

  // Fetch restaurant information and menu items on component mount
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // Function to fetch restaurant information and menu items from the API
  async function getRestaurantInfo() {
    try {
      // Fetch data from the API
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=80719&catalog_qa=undefined&submitAction=ENTER"
      );

      // Convert API response to JSON
      const json = await data.json();

      // Set restaurant information in the state
      setRestaurant(json?.data?.cards?.[0]?.card?.card?.info || {});

      // Extract the menu item cards from the API response
      const menuItemCards =
        json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

      // Set menu items in the state by extracting the 'info' object from each 'itemCard'
      setMenuItems(menuItemCards.map((itemCard) => itemCard?.card?.info || {}));
    } catch (error) {
      console.error("Error fetching restaurant menu data:", error);
    }
  }

  return (
    <div>
      <div>
        {/* Display restaurant information */}
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="Restaurant" />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} ★</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <div>
        {/* Display menu items */}
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
