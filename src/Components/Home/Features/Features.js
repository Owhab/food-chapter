import React, { useEffect, useState } from "react";
import featuredata from "../../../Mealdata/featuredata.json";
import Feature from "../Feature/Feature";
import "./Features.css";

const Features = () => {
  const [featuredatas, setFeatureDatas] = useState({});
  useEffect(() => {
    fetch(featuredata)
      .then((res) => res.json())
      .then((data) => setFeatureDatas(data));
  }, []);
  return (
    <div>
      <div className="desc mx-4">
        <h1 className="text-3xl	my-4">Why you choose us</h1>
        <div className="my-4">
          <p>
            Barton waited twenty always repair in within we do. An delighted
            offending
          </p>
          <p>
            curisity in my mind is dashwoods at. Boy properous increasing
            surrounded.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredata.map((fdata) => (
          <Feature key={fdata.title} fdata={fdata}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Features;
