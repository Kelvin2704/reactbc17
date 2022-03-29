import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
  render() {
    return (
      <table className="table">
        <thead className="bg-dark text-white font-weight-bold">
          <tr>
            <th>Tài khoản</th>
            <th>Họ Tên</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.mangNguoiDung.map((nguoiDung, index) => {
            <tr key={index}>
              <td>{nguoiDung.taiKhoan}</td>
              <td>{nguoiDung.hoTen}</td>
              <td>{nguoiDung.matKhau}</td>
              <td>{nguoiDung.email}</td>
              <td>{nguoiDung.soDienThoai}</td>
              <td>{nguoiDung.loaiNguoiDung}</td>
              <td>
                <button className="btn btn-danger">Xóa</button>
                <button className="btn btn-primary ml-2">Sửa</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    mangNguoiDung: rootReducer.quanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(TableNguoiDung);
