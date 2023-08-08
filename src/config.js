export const IMG_CDN_URL ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const ResData_API_URL_DESKTOP =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// Construct the API URL using the user's city latitude and longitude
export const ResData_API_URL_MOBILE = async () => {
  try {
    if ("geolocation" in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // Fetch city details based on user's latitude and longitude
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
      );

      if (response.ok) {
        const data = await response.json();
        const cityLatitude = data.lat;
        const cityLongitude = data.lon;

        // Construct the API URL with city's latitude and longitude
        return `https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=${cityLatitude}&lng=${cityLongitude}`;
      } else {
        throw new Error("Failed to fetch city details.");
      }
    } else {
      console.error("Geolocation is not available in this browser.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

/*   export const ResData_API_URL_MOBILE =
  "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=25.473034&lng=81.878357"; */

  export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"; 
  
  export const ResMenu_Data_API_URL= "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=";
  export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

  export const infoWithStyle_Type_key="type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
