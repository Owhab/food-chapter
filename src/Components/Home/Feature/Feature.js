import React from "react";
import notificationicon from "../../../images/ICON/notification.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const Feature = ({ fdata }) => {
  const { image, title, description } = fdata;
  return (
    <div className="p-4">
      <img src={image} alt="" />
      <div className="flex my-3">
        <div>
          <img className="w-20" src={notificationicon} alt="" />
        </div>
        <div className="px-3">
          <p>{description}</p>
          <div className="flex my-2">
            <h3 className="text-blue-700 font-bold">See More</h3>{" "}
            <ArrowCircleRightIcon className="mx-3" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
