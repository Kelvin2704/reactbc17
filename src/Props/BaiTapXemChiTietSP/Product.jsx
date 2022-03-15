import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card">
        <img src={product.hinhAnh} alt="..." height={300} />
        <div className="card-body bg-dark text-white text-left">
          <p>{product.tenSP}</p>
          <p>{product.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.moreDetailFunc(product);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn-danger ml-2"
            onClick={() => {
              this.props.themGioHang(product);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
