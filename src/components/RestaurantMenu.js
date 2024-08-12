import React, { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log("params=====>", MENU_URL + resId, resId);
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
  // console.log("info==>", resInfo.cards[2].card.card.info.cuisines);
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log(
  //   "<=====>",
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  // );
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (cate) =>
        cate.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={showIndex === index ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs. "}
            {(item.card.info.defaultPrice
              ? item.card.info.defaultPrice
              : item.card.info.price) / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
