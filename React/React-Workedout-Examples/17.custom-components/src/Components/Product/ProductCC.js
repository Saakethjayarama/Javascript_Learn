import React, { Component } from "react";

export class ProductCC extends Component {
  render() {
    const { image, description, price } = this.props;

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
}

export default ProductCC;
