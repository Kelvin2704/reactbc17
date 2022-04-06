import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  state = {
    submitted: true,
  };
  handleSubmit = (e) => {
    this.setState({
      submitted: false,
    });
    e.preventDefault();
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Dang ky</h3>
        <div className="form-group">
          <p>Tai khoan</p>
          <input name="taiKhoan" className="form-control" />
        </div>
        <div className="form-group">
          <p>ho ten</p>
          <input name="hoTen" className="form-control" />
        </div>
        <div className="form-group">
          <p>mat khau</p>
          <input name="matKhau" className="form-control" type="password" />
        </div>
        <div className="form-group">
          <p>email</p>
          <input name="email" className="form-control" />
        </div>
        <div className="form-group">
          <p>So dien thoai</p>
          <input name="soDienThoai" className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Dang ky
          </button>
        </div>

        <Prompt when={this.state.submitted} message={(location) => "ban thuc su muon roi khoi trang???"} />
      </form>
    );
  }
}
