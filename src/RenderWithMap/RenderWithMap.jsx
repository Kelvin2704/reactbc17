import React, { Component } from "react";

export default class RenderWithMap extends Component {
  productList = [
    { id: 1, name: "black car", price: "1000", img: "./img/black-car.jpg" },
    { id: 2, name: "red car", price: "1000", img: "./img/red-car.jpg" },
    { id: 3, name: "silver car", price: "1000", img: "./img/silver-car.jpg" },
    { id: 4, name: "steel car", price: "1000", img: "./img/steel-car.jpg" },
  ];
  renderProduct = () => {
    //output = [<tr></tr>,<tr></tr>]
    // let result = [];
    // for (let index = 0; index < this.productList.length; index++) {
    //   let product = this.productList[index];
    //   let trProduct = (
    //     <tr>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td>
    //         <img src={product.img} />
    //       </td>
    //     </tr>
    //   );
    //   result.push(trProduct);
    // }
    // return result;

    // cách 2
    let result = this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} alt="..." width={50} />
          </td>
        </tr>
      );
    });
    return result;
  };

  renderDivBootstrap = () => {
    //output
    return this.productList.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img src={product.img} alt="..."></img>
            <div className="card-body">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="btn btn-success">View detail</button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Product List</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* [<tr></tr>] */}
            {this.renderProduct()}
          </tbody>
        </table>
        <h3>Product Render Column</h3>
        <div className="row">{this.renderDivBootstrap()}</div>
      </div>
    );
  }
}
