import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [List, setList] = useState([]);
  const [filterData, setFilter] = useState([]); //This is only for filter restro
  const [searchText, setSearchText] = useState(""); //THis is for search
  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log("CardData===>", filterData);
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

  if (List.length === 0) {
    return <Shimmer />;
  }
  // whenever state variable update, react trigger a reconciliation cycle(re-render the components)
  // when ever change the local variable react re-render the component
  // First We bind the search box with local variable i.e. value=()
  // onChange() function change my search text with new value with "event":- using "event.target.value".
  return (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-s-black-400 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 mx-2 bg-green-100 rounded-md"
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
          <button
            className="px-2 mx-2 bg-blue-100 rounded-md"
            onClick={() => {
              setFilter(List.filter((response) => response.info.avgRating > 4));
            }}
          >
            Top Restaurant
          </button>
          <input
            type="text"
            className="border border-s-black-400 rounded-md"
            value={loggedInUser}
            data-testid="searchInput"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterData.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
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
