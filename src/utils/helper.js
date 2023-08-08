import { ResData_API_URL_DESKTOP, ResData_API_URL_MOBILE } from "../config";

//Filter function
export const filterData = (searchText, restaurants) => {
  if (!searchText) {
    return restaurants;
  }
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
};

//getRestaurant function

export const getRestaurants = async (
  setRestaurants,
  setFilteredRestaurants
) => {
  const deviceType = window.innerWidth >= 821 ? "desktop" : "mobile";
  const apiUrl =
    deviceType === "desktop" ? ResData_API_URL_DESKTOP : ResData_API_URL_MOBILE;

  try {
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
        : json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
            .restaurants;
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

//handle search
export const handleSearch = (
  setFilteredRestaurants,
  searchText,
  restaurants,
  setErrorMessage
) => {
  // Filter data function call
  const filteredData = filterData(searchText, restaurants);
  setFilteredRestaurants(filteredData);
  if (filteredData.length === 0) {
    setErrorMessage(`Sorry, we couldn't find any results for "${searchText}"`);
  } else {
    setErrorMessage("");
  }
};

//cart quantity control buttons


