import { useState } from "react";
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurant.map((restaurant) => {
          return <RestroCard resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
