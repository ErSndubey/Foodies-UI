import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  totalRatingsString,
}) => {
  return (
    <div className="w-auto max-w-fit border-2 shadow-xl mt-2  rounded-t-lg pb-4 mb-3 scale-100 hover:scale-95 ease-in duration-100 ">
      <img
        className="h-48 w-72 rounded-t-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
     
      <h2 className="text-xl font-bold pl-2 text-gray-700 my-2  w xl:w-72 truncate ...">{name}</h2>
      
      <div className="rating flex items-center">
      <svg
        className="w-4 h-4 text-yellow-300 mx-2 my-1  "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <h4 className=" text-sm font-bold text-gray-600 ">
        {avgRating}
      </h4>
      <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
      <p
        href="#"
        className="text-sm font-medium  underline hover:no-underline text-gray-600"
      >
        {totalRatingsString} 
      </p>
      </div>
      <h4 className="pl-2  w xl:w-72 truncate ...">{cuisines?.join(", ")}</h4>
      <h4 className="pl-2">{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;

