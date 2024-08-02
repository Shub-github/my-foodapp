// To import named export use curley braces{}
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  console.log(props);
  const { name, rating } = props.resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="burger" src={CDN_URL}></img>
      <h3>{name}</h3>
      <h4>{rating}*</h4>
    </div>
  );
};

export default RestaurantCard;
