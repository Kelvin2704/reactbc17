import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    let { maSP, tenSP, gia, hinhAnh } =
      this.props.product;
    //this.props là thuộc tính có sẵn của react class component dùng để truyền dữ liệu từ component cha sang con
    //this.props là thuộc tính readonly: không thể gán lại được giá trị
    return (
      <div className="card">
        <img src={hinhAnh} alt="..." /> 
        <div className="card-body">
          <p>Tên sản phẩm: {tenSP}</p>
          <p>Giá: {gia}</p>
        </div>
      </div>
    );
  }
}
