import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [List, setList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setList(List.filter((response) => response.rating > 4));
          }}
        >
          Top rated
        </button>
      </div>
      <div className="res-container">
        {List.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// Two type of import and two type of export
// One default export that is mention above and one is named export
// Default export:- export default Body;
// Named export :- export const  body{};
