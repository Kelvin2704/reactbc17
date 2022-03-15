import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProduct = () => {
    let { dataProduct } = this.props;
    return dataProduct.map((item,index) => {
        return <div className="col-4 mt-2" key={index}>
            <Product product={item}/>
        </div>
    })
  };
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3>Product List</h3>
        </div>
        {this.renderProduct()}
      </div>
    );
  }
}
