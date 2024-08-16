// To import named export use curley braces{}
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log("resData==>", props.resData.info);
  const {
    name,
    avgRating,
    areaName,
    cuisines,
    locality,
    sla,
    cloudinaryImageId,
  } = props.resData.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200"
    >
      <img className="w-60 h-50 rounded-md" alt="burger" src={CDN_URL}></img>
      <h3 className="font-bold py-1">{name}</h3>
      <h4>{avgRating}*</h4>
      <h5>{areaName}</h5>
      <h5>{locality}</h5>
      <h5>{sla.slaString}</h5>
      <p className="text-ellipsis overflow-hidden ">{cuisines.join(",")}</p>
    </div>
  );
};

export default RestaurantCard;
