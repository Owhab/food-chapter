import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Meal from "../Meal/Meal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Meal></Meal>
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
