// Function to filter the restaurants based on the search input
export function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
}

