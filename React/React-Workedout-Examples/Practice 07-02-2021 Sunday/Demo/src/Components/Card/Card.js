import React from "react";
import "./product.css";

function Card({ description, image }) {
  return (
    <div className="Product">
      <div className="Product__image">
        <img src={image} />
      </div>
      <div className="Product__body">{description}</div>
    </div>
  );
}

export default Card;
