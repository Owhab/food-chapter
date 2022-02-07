import React from "react";

import Logo from "../../../images/FoodChapter.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="menubar m-5">
        <img src={Logo} alt="" className="brand-logo" />
        <div>
          <ul className="nav-items">
            <span className="px-5 py-2">Home</span>
            <span className="px-5 py-2">About</span>
            <span className="px-5 py-2">Contact</span>
            <span className="login-btn px-5 py-2">Login</span>
            <button className="bg-red-500 text-white font-medium py-2 px-7 rounded-full">
              Sign Up
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
