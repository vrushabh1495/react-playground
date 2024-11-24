import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items?.map((item) => (
          <div
            className="p-2 m-2 border-b-2 border-gray text-left flex justify-between"
            key={item.card.info.id}
          >
            <div className="p-2">
              <div>
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-36"></img>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
