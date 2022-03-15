import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class DemoProps extends Component {
  render() {
    let productA = {
      maSP: 1,
      tenSP: "iphone",
      gia: 1000,
      hinhAnh:
        "https://picsum.photos/id/1/200/300",
    };
    let productB = {
      maSP: 2,
      tenSP: "iphoneX",
      gia: 2000,
      hinhAnh:
        "https://picsum.photos/id/2/200/300",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ChildComponent product={productA} /> 
          </div>
          <div className="col-4">
            <ChildComponent product={productB} />
          </div>
        </div>
      </div>
    );
  }
}
