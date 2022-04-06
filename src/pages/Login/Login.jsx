import React, { Component } from "react";

export default class Login extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
  };
  handleChange = (e) => {
    let { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { taiKhoan, matKhau } = this.state;
    if (taiKhoan === "cybersoft" && matKhau === "cybersoft") {
      localStorage.setItem("userLogin", "nguoiDung");
      // //chuyển hướng về home
      this.props.history.push("/home");
      //thay đổi trang hiện tại bằng trang chỉ định
      // this.props.history.replace('/home')
    } else if (taiKhoan === "admin" && matKhau === "admin") {
      localStorage.setItem("userLogin", "admin");
      this.props.history.push("/admin");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Đăng nhập</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input id="taiKhoan" name="taiKhoan" className="form-control" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input id="matKhau" name="matKhau" className="form-control" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng nhập
          </button>
        </div>
      </form>
    );
  }
}
