const ShimmerMenu = () => {

  const generateShimmerItems = () => {
    const shimmerItems = [];
    for (let i = 0; i < 5; i++) {
     
      shimmerItems.push(
        <div
          key={i}
          className="bg-gray-200 my-3 rounded-lg shadow-md border border-gray-200 flex justify-between flex-row-reverse items-center mx-2 animate-pulse"
          style={{ height: "120px" }} 
        >
          <div className="mx-2 items-center relative my-4">
            <div className="w-40 xl:w-32 h-24 bg-gray-300 rounded-md border border-gray-100" />
            <div
              className="px-1 xl:px-3 py-0.5 xl:py-1 bg-gray-300 text-xs text-white rounded absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3"
              style={{ width: "40px" }} 
            />
          </div>
          <div className="flex flex-col mx-3">
            <div
              className="h-4 bg-gray-300 rounded mb-2"
              style={{ width: "60%" }}
            />
            <div className="h-4 bg-gray-300 rounded" style={{ width: "80%" }} />
          </div>
        </div>
      );
    }
    return shimmerItems;
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Restaurant Info container */}
      <div className="container flex justify-between m-4 border-b border-dashed border-gray-500 pb-4">
        <div className="w-1/2 bg-gray-300 h-16 rounded-lg animate-pulse" />
        <div className="w-1/5 mr-7 xl:mr-0 bg-gray-300 h-16 rounded-lg animate-pulse " />
      </div>

      {/* Menu Items container */}
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 mx-2 text-gray-600 w-1/4 bg-gray-300 h-10 rounded-lg animate-pulse" />
        <div className="flex flex-col">{generateShimmerItems()}</div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
