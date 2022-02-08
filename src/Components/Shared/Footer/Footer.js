import React from "react";
import logo from "../../../images/FoodChapter.jpg";

const Footer = () => {
  return (
    <div className="bg-[#313552] p-10 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white">
        <div>
          <img src={logo} alt="" />
        </div>
        <div></div>
        <div>
          <ul>
            <li>About Online Food</li>
            <li>Read Our Blog</li>
            <li>Sign Up to Deliver</li>
            <li>Add Your Resturant</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Get Help</li>
            <li>Read FAQs</li>
            <li>View All Cities</li>
            <li>Resturants Near Me</li>
          </ul>
        </div>
      </div>
      <div className="py-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white">
        <div>
          <p className="p-5">
            Copyright &copy; 2022 || by{" "}
            <a target="_blank" href="https://abdulowhab.netlify.app">
              Abdul Owhab
            </a>
          </p>
        </div>
        <div className="w-20"></div>
        <div className="flex">
          <p className="px-5">Privacy Policy</p>
          <p className="px-5">Terms of Use</p>
          <p className="px-5">Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
