import { CDN_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12 py-2">
            <span>{item.card?.info?.name}</span>
            <span>
              - ₹{" "}
              {(item.card.info.price
                ? item.card.info.price
                : item.card.info.defaultPrice) / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div>
              {/* <button className="p-2 mx-16 rounded-lg bg-black text-white">
                Add
              </button> */}
              <img
                className="w-full rounded-md"
                alt="burger"
                src={CDN_URL}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
