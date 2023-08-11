import axios from "axios";

export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const ResData_API_URL_DESKTOP = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const BING_MAPS_API_KEY = "AiByuWBZ4x5S251J2juqm8pDyd38lMRbDHmGUjHzyHm-e0t19MxCcKD-TF_5OPtL";
export const ITEM_IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
export const ResMenu_Data_API_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=";
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
export const infoWithStyle_Type_key = "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle";

export const fetchUserLocationData = async () => {
  try {
    if ("geolocation" in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const apiKey = "AiByuWBZ4x5S251J2juqm8pDyd38lMRbDHmGUjHzyHm-e0t19MxCcKD-TF_5OPtL";
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const reverseGeocodeUrl = `https://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${apiKey}`;
      const response = await axios.get(reverseGeocodeUrl);

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        const address = data.resourceSets[0]?.resources[0]?.address;
        const district = address.adminDistrict2;
        const state = address.adminDistrict;
        const country = address.countryRegion;

        const apiUrl_Mobile = `https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}`;
        const apiUrl_Desktop = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}`;
        const corsProxyUrl_Mobile = `https://corsproxy.io/?${apiUrl_Mobile}`;
        const corsProxyUrl_Desktop = `https://corsproxy.io/?${apiUrl_Desktop}`;

        return {
          corsProxyUrl_Mobile,
          corsProxyUrl_Desktop,
  /*         apiUrl_Mobile,
          apiUrl_Desktop, */
          district,
          state,
          country
        };
      } else {
        throw new Error("Failed to fetch city details.");
      }
    } else {
      console.error("Geolocation is not available in this browser.");
      const enableLocation = window.confirm("Please enable location services to use our app. Do you want to enable it now?");
      if (enableLocation) {
        window.location.href = "settings:apps";
      }
      return { locationDenied: true };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { locationError: true };
  }
};



