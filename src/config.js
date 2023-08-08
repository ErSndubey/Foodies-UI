export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const ResData_API_URL_DESKTOP =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const BING_MAPS_API_KEY =
  "AiByuWBZ4x5S251J2juqm8pDyd38lMRbDHmGUjHzyHm-e0t19MxCcKD-TF_5OPtL";

// Construct the API URL using the user's city latitude and longitude
export const fetchUserLocationData = async () => {
  try {
    if ("geolocation" in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const apiKey = "AiByuWBZ4x5S251J2juqm8pDyd38lMRbDHmGUjHzyHm-e0t19MxCcKD-TF_5OPtL"; // Replace with your Bing Maps API key

      // Construct the URL to reverse geocode the user's location
      const reverseGeocodeUrl = `https://dev.virtualearth.net/REST/v1/Locations/${position.coords.latitude},${position.coords.longitude}?key=${apiKey}`;

      // Fetch city details based on user's latitude and longitude using Bing Maps API
      const response = await fetch(reverseGeocodeUrl);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Extract district, latitude, and longitude from Bing Maps response
        const address = data.resourceSets[0]?.resources[0]?.address;
        const district = address.adminDistrict2;
        const state = address.adminDistrict;
        const country = address.countryRegion;
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Construct the API URL with district, latitude, and longitude
        const apiUrl = `https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}&district=${district}`;

        // Construct the final response URL with corsproxy.io prefix
        const corsProxyUrl = `https://corsproxy.io/?${apiUrl}`;

        return {
          corsProxyUrl,
          district,
          state,
          country,
        };
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

export const ResMenu_Data_API_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=";
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

export const infoWithStyle_Type_key =
  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle";
