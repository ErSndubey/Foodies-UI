import { IMG_CDN_URL } from "../config";
const RestrauntCard = ({
    name,
    cuisines,
    totalRatingsString,
    avgRating,
    costForTwoString,
    cloudinaryImageId,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <h4>{totalRatingsString} </h4>
        <h4>{avgRating} ★</h4>
        <h4>{costForTwoString} </h4>
      </div>
    );
  };

  export default RestrauntCard ;