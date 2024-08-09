import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
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
          <li className="px-4">{onlineStatus == true ? "🟢" : "🔴"}</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
