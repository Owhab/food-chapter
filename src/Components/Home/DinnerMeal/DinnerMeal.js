import React from "react";

const DinnerMeal = ({ dmeal }) => {
  const { image, name, description, price } = dmeal;

  return (
    <div className="text-center">
      <div className="text-center">
        <img className="w-60 singlemeal-image" src={image} alt={name} />
        <h3 className="text-2xl bold">{name}</h3>
        <p>{description}</p>
        <span className="text-4xl">${price}</span>
      </div>
    </div>
  );
};

export default DinnerMeal;
