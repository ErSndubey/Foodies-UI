
import { useParams } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useResMenuData from "../Hooks/useResMenuData";
import {
  ResMenu_Data_API_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../config";

import ShimmerMenu from "../Shimmer/ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { cartItems, addToCart } = useCart();
 /*  const { addToCart } = useCart();  */// Using the addToCart function from the custom hook
  const [restaurant, menuItems] = useResMenuData(
    ResMenu_Data_API_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

 

  return !restaurant ? (
    <ShimmerMenu/>
  ) : (
    <>
    <div className="container mx-auto mt-8">
      {/* Restaurant Info container */}
      <div className="container flex justify-between m-4 border-b border-dashed border-gray-500 pb-4">
        <div className="text-gray-600">
          <h2 className="font-bold text-2xl ">{restaurant?.name}</h2>
          <h2 className="font-normal text-sm mt-2">
            {restaurant?.cuisines?.join(", ")}
          </h2>
          <h2 className="font-normal text-sm space-x-2">
            <span>{restaurant.areaName}</span>, <span>{restaurant.city}</span>
          </h2>
        </div>
        <div className=" w-48 max-w-[7rem] xl:w-28 lg:w-28 md:w-6 h-20 border mr-7 rounded border-gray-300 p-3 flex flex-col items-center">
          <h2 className="text-gray-600">{restaurant?.avgRating} ⭐</h2>
          <h4 className="text-sm text-gray-600">
            {restaurant?.totalRatingsString}
          </h4>
        </div>
      </div>

      {/* Menu Items container */}
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 mx-2 text-gray-600">
          Restaurant Menu ({menuItems.length})
        </h2>
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <div
              key={item?.id}
              className="bg-white my-3 rounded-lg shadow-md border border-gray-200 flex justify-between flex-row-reverse items-center mx-2"
            >
              <div className="mx-2 items-center relative my-4">
                <img
                  src={ITEM_IMG_CDN_URL + item?.imageId}
                  alt={item?.name}
                  className="w-80 h-24 max-w-[8rem]  xl:w-32 md:w-32 object-cover rounded-md border border-gray-100"
                />
                <button
                  className=" w-20 px-1 xl:px-3 py-0.5 xl:py-1 border border-gray-400 bg-white text-xs text-green-600 font-bold rounded absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 hover:bg-green-600 hover:text-white hover:border-white"
                  onClick={() => addToCart(item)} // Use addToCart function from the custom hook
                >
                  ADD +
                </button>
              </div>
              <div className="flex flex-col mx-3">
                <p className="mt-2 mx-1">
                  {item.isVeg === 1 ? (
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        className="fill-current text-green-600"
                        rx="0"
                      />
                      <circle cx="10.5" cy="10.5" r="5.5" fill="white" />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        className="fill-current text-red-600"
                        rx="0"
                      />
                      <circle cx="10.5" cy="10.5" r="5.5" fill="white" />
                    </svg>
                  )}
                </p>
                <h3 className="text-sm lg:text-lg text-gray-600 font-bold ">{item.name}</h3>
                <p className="text-gray-700 font-bold my-1">
                  ₹ {item?.price / 100}
                </p>
                <h3 className="text-gray-500 font-normal text-xs font mb-2 line-clamp-2 md:line-clamp-none ">
                  {item?.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    </>
  );
};

export default RestaurantMenu;

