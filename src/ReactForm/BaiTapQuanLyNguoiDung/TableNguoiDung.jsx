import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

class TableNguoiDung extends Component {
  state = {
    sortBy: "taiKhoan",
  };
  handleSort = (name) => {
    this.setState({
      sortBy: name,
    });
  };
  render() {
    let { mangNguoiDung } = this.props;
    mangNguoiDung = _.sortBy(mangNguoiDung, [this.state.sortBy]); //'taiKhoan : this.state.sortBy
    console.log(this.props);
    return (
      <table className="table">
        <thead className="bg-dark text-white font-weight-bold">
          <tr>
            <th
              onClick={() => {
                this.handleSort("taiKhoan");
              }}
            >
              Tài khoản
            </th>
            <th
              onClick={() => {
                this.handleSort("hoTen");
              }}
            >
              Họ Tên
            </th>
            <th
              onClick={() => {
                this.handleSort("matKhau");
              }}
            >
              Mật khẩu
            </th>
            <th
              onClick={() => {
                this.handleSort("email");
              }}
            >
              Email
            </th>
            <th
              onClick={() => {
                this.handleSort("soDienThoai");
              }}
            >
              Số điện thoại
            </th>
            <th
              onClick={() => {
                this.handleSort("loaiNguoiDung");
              }}
            >
              Loại người dùng
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.mangNguoiDung.map((nguoiDung, index) => {
            return (
              <tr key={index}>
                <td>{nguoiDung.taiKhoan}</td>
                <td>{nguoiDung.hoTen}</td>
                <td>{nguoiDung.matKhau}</td>
                <td>{nguoiDung.email}</td>
                <td>{nguoiDung.soDienThoai}</td>
                <td>{nguoiDung.maLoaiNguoiDung}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      const action = {
                        type: "XOA_NGUOI_DUNG",
                        taiKhoan: nguoiDung.taiKhoan,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => {
                      const action = {
                        type: "SUA_NGUOI_DUNG",
                        nguoiDung: nguoiDung,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            );
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
