import React from "react";
import "./singlemeal.css";

const BreakfastMeal = ({ bmeal }) => {
  const { image, name, description, price } = bmeal;

  return (
    <div className="text-center p-4 hover:shadow-lg hover:rounded">
      <img className="w-60 singlemeal-image" src={image} alt={name} />
      <h3 className="text-xl bold">{name}</h3>
      <p>{description}</p>
      <span className="text-3xl">${price}</span>
    </div>
  );
};

export default BreakfastMeal;
