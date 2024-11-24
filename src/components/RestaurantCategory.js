import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const handleClick = () => {
    setShowItems(!showItems);
  };
  const [showItems, setShowItems] = useState(false);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
