// To import named export use curley braces{}
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props.resData.info);
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
    <div className="res-card">
      <img className="res-logo" alt="burger" src={CDN_URL}></img>
      <h3>{name}</h3>
      <h4>{avgRating}*</h4>
      <h5>{areaName}</h5>
      <h5>{locality}</h5>
      <h5>{sla.slaString}</h5>
      <h5>{cuisines}</h5>
    </div>
  );
};

export default RestaurantCard;
