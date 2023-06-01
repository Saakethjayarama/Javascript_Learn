import React from "react";
import "./product.css";

function Product(props) {
  const { description, image, price } = props;
  return (
    <div className="Product">
      <div className="Product__image">
        <img src={image} />
      </div>
      <div className="Product__body">{description}</div>
      <div className="Product__action">
        <b>Rs. {price}</b>
      </div>
    </div>
  );
}

export default Product;
