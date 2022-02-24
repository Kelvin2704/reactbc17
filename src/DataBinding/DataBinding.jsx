import React, { Component } from "react";

export default class DataBinding extends Component {
  //thuoc tinh
  product = {
    id: 1,
    name: "IPhone",
    price: 1000,
    img: "https://i.pravatar.cc/200",
  };
  renderProduct = () => {
    return (//nd tra ve cua ham muon binding phai dc chua trong 1 the bao phu hoac la string hoac number
      <div className="card w-25">
        <img src="{this.product.img}" alt="..." />
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
        </div>
      </div>
    );
  };
  render() {
    let title = "cybersoft";
    return (
      <div className="container">
        <p id="txt">{title}</p>
        <hr></hr>
        {this.renderProduct()}
      </div>
    );
  }
}
