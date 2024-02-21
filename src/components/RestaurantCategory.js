import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  //   console.log(data.itemCards);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>˅</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
