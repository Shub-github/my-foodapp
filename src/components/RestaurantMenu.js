import React, { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log("params=====>", MENU_URL + resId, resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  if (resInfo == null) return <Shimmer />;

  const { name, avgRating } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log("<=====>", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs. "}
            {(item.card.info.defaultPrice
              ? item.card.info.defaultPrice
              : item.card.info.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
