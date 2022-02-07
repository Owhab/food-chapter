import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner bg-cover">
      <h1 className="text-4xl py-2">Best food waiting for your belly.</h1>

      <div className="input-field">
        <input
          className="font-medium py-2 px-7 rounded-full"
          type="text"
          placeholder="Search food item"
        />
        <button className="bg-red-500 text-white font-medium py-2 px-7 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
