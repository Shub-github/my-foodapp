import { CDN_URL } from "../utils/constant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const AddItem = (item) => {
    dispatch(addItem(item));
  };

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

          <div className="w-3/12 p-4 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex">
              <button
                onClick={() => AddItem(item)}
                className="p-2 mx-16 border border-white rounded-lg bg-black text-white hover:bg-slate-200 hover:text-black"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem())}
                className="p-2 mx-16 border border-white rounded-lg bg-black text-white hover:bg-slate-200 hover:text-black"
              >
                -
              </button>
            </div>
            <img className="w-full rounded-md" alt="burger" src={CDN_URL}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
