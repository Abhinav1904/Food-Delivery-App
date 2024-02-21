import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const [login, setLogin] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-400 shadow-md">
      <div className="logo-container">
        <img className="w-16" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4">
          <li className="px-4 text-white font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-white font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-white font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-white font-bold">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <button
            className="px-4 text-white font-bold"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
