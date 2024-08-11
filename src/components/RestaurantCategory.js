import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log("props==>", data);
  return (
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>{"⬇️"}</span>
      </div>
      <ItemList items={data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
