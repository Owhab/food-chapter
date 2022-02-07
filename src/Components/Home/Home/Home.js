import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Meal from "../Meal/Meal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Meal></Meal>
    </div>
  );
};

export default Home;
