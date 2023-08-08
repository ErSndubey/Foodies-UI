

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