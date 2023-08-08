import { ResData_API_URL_DESKTOP, fetchUserLocationData } from "../config";

export const useResData = async (setRestaurants, setFilteredRestaurants ,setUserLocation) => {
  const deviceType = window.innerWidth >= 821 ? "desktop" : "mobile";
  let apiUrl;

  if (deviceType === "desktop") {
    apiUrl = ResData_API_URL_DESKTOP;
  } else {
    apiUrl = fetchUserLocationData;
    try {
      // Call the ResData_API_URL_MOBILE function to get the URL
      const data = await fetchUserLocationData();
      apiUrl = data.corsProxyUrl;
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
    /*  const data = await fetch(apiUrl); */
    const data = await fetch(apiUrl);

    if (!data.ok) {
      throw new Error("Network response was not ok.");
    }

    const json = await data.json();
    console.log(json);

    const restaurants =
      deviceType === "desktop"
        ? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants;
            
    console.log(restaurants);
    setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);

    return [setRestaurants, setFilteredRestaurants];
  } catch (error) {
    console.error(
      "An error occurred while fetching or processing data:",
      error
    );
  }
};
