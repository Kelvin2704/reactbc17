import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div
        className="card"
        style={{ width: 300 }}
      >
        <img
          className="card-img-top"
          src={product.image}
          alt=""
          style={{ height: 300 }}
        />
        <div className="card-body">
          <p>{product.name} </p>
          <p>{product.price}</p>
          <button
            className="btn text-white"
            style={{ backgroundColor: "#000" }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
