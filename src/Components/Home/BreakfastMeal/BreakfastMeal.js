import React from "react";
import "./singlemeal.css";

const BreakfastMeal = ({ bmeal }) => {
  const { image, name, description, price } = bmeal;

  return (
    <div className="text-center">
      <img className="w-60 singlemeal-image" src={image} alt={name} />
      <h3 className="text-2xl bold">{name}</h3>
      <p>{description}</p>
      <span className="text-4xl">${price}</span>
    </div>
  );
};

export default BreakfastMeal;
