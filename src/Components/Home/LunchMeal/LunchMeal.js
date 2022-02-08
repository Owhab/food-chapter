import React from "react";
import "./LunchMeal.css";

const LunchMeal = ({ lmeal }) => {
  const { image, name, description, price } = lmeal;

  return (
    <div className="text-center p-4 hover:shadow-lg hover:rounded ">
      <img className="w-60 singlemeal-image" src={image} alt={name} />
      <h3 className="text-xl bold">{name}</h3>
      <p>{description}</p>
      <span className="text-3xl">${price}</span>
    </div>
  );
};

export default LunchMeal;
