import React from "react";

const DinnerMeal = ({ dmeal }) => {
  const { image, name, description, price } = dmeal;

  return (
    <div className="p-4 hover:shadow-lg hover:rounded">
      <img className="w-60 singlemeal-image" src={image} alt={name} />
      <h3 className="text-xl bold">{name}</h3>
      <p>{description}</p>
      <span className="text-3xl">${price}</span>
    </div>
  );
};

export default DinnerMeal;
