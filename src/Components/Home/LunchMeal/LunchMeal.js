import React from "react";
import "./LunchMeal.css";

const LunchMeal = ({ lmeal }) => {
  const { image, name, description, price } = lmeal;

  return (
    <div className="text-center">
      <img className="w-60 singlemeal-image" src={image} alt={name} />
      <h3 className="text-2xl bold">{name}</h3>
      <p>{description}</p>
      <span className="text-4xl">${price}</span>
    </div>
  );
};

export default LunchMeal;
