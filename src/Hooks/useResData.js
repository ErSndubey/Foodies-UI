import { ResData_API_URL_DESKTOP, fetchUserLocationData } from "../config";

export const useResData = async (setRestaurants, setFilteredRestaurants, setUserLocation) => {
  const deviceType = window.innerWidth >= 769 ? "desktop" : "mobile";
  let apiUrl;
  console.log(deviceType);

  if (deviceType === "desktop") {
    try {
      const data = await fetchUserLocationData();
      apiUrl = data.corsProxyUrl_Desktop;
      setUserLocation({
        district: data.district,
        state: data.state,
        country: data.country,
      });
    } catch (error) {
      console.error("Error getting desktop API URL:", error);
      return;
    }
  } else {
    try {
      const data = await fetchUserLocationData();
      apiUrl = data.corsProxyUrl_Mobile;
      setUserLocation({
        district: data.district,
        state: data.state,
        country: data.country,
      });
    } catch (error) {
      console.error("Error getting mobile API URL:", error);
      return;
    }
  }

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const json = await response.json();
    console.log(json);

    const restaurants =
    deviceType === "desktop"
      ? json?.data?.cards
          .find((card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants)
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants
      : json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
  
    setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);

    return [setRestaurants, setFilteredRestaurants];
  } catch (error) {
    console.error("An error occurred while fetching or processing data:", error);
  }
};
