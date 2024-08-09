// Custom hook for this "use" is important before any hook
// Two thing is imp one is what to take as input while creating hook and what to return in hook;
import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  const [resInfo, setResInfo] = useState(null);
  return resInfo;
};

export default useRestaurantMenu;
