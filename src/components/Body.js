import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [List, setList] = useState([]);
  const [filterData, setFilter] = useState([]); //This is only for filter restro
  const [searchText, setSearchText] = useState(""); //THis is for search

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(
    //   jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setList(
      jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilter(
      jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (List.length === 0 || filterData.length === 0) {
    return <Shimmer />;
  }
  // whenever state variable update, react trigger a reconciliation cycle(re-render the components)
  // when ever change the local variable react re-render the component
  // First We bind the search box with local variable i.e. value=()
  // onChange() function change my search text with new value with "event":- using "event.target.value".
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const listOfRes = List.filter((res) =>
                // console.log(res.info.name)
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilter(listOfRes);
            }}
          >
            Search
          </button>
        </div>

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
        {filterData.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
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
