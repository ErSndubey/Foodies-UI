import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(FETCH_MENU_URL + resId);

      const json = await data.json();

      setRestaurant(json?.data?.cards?.[0]?.card?.card?.info || {});

      const menuItemCards =
        json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
          ?.card?.card?.itemCards || [];

      setMenuItems(menuItemCards.map((itemCard) => itemCard?.card?.info || {}));
    } catch (error) {
      console.error("Error fetching restaurant menu data:", error);
    }
  }

  return [restaurant, menuItems];
};

export default useRestaurant;
