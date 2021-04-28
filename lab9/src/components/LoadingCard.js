import React from "react";
import heart from "../icons/heart.png";

const LoadingCard = () => (
  <div className="loading">
    <img src={heart} alt="Loading" />
    Loading...
  </div>
);

export default LoadingCard;
