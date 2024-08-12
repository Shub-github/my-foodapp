import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log("onlineStatus==>", loggedInUser);
  return (
    <div className="flex justify-between bg-slate-200 shadow-lg">
      <div className="logo-container">
        <img
          className="w-20 p-1 m-1 rounded-full"
          alt="logo"
          src={LOGO_URL}
        ></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 bg-gray-400 rounded-md">
            {" "}
            Active: {onlineStatus == true ? "🟢" : "🔴"}
          </li>
          <Link className="px-4 hover:bg-gray-100 rounded-md" to="/">
            Home
          </Link>
          <Link className="px-4 hover:bg-gray-100 rounded-md" to="/about">
            About Us
          </Link>
          <Link className="px-4 hover:bg-gray-100 rounded-md" to="/contact">
            Contact Us
          </Link>
          <Link className="px-4 hover:bg-gray-100 rounded-md" to="/">
            Cart
          </Link>
          <button
            className="px-2 bg-gray-300 rounded-md"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 bg-gray-100 rounded-md">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
