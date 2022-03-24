import React, { Component } from "react";

export default class FormNguoiDung extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "NguoiDung",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
  };
  handleChangeInput = (e) => {
    let { value, id, name } = e.target; //e.target là thẻ xảy ra sự kiện //value: locgasg123 id="taiKhoan" name="taiKhoan"
    // console.log("value,id,name", value, id, name);
    let typeMeta = e.target.getAttribute("typeMeta"); //getAttribute là mở rộng thuộc tính cho thẻ, định dạng email

    //clone values ra một mảng newValue và gán id của mãng mới bằng value
    let newValues = { ...this.state.values };
    newValues[id] = value; // taiKhoan:'locgasg123'

    let newErrors = { ...this.state.errors };
    let messageError = "";
    if (value === "") {
      messageError = id + " không được bỏ trống";
    }
    if (typeMeta === "email") {
      let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regexEmail.test(value)) {
        messageError = id + "  không đúng định dạng";
      }
    }
    newErrors[id] = messageError;

    //sau đó setState lại
    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSubmit = (e) => {
    e.preventDefault(); // hàm cản sự kiện reload của browser
    //kiểm tra dữ liệu có bị lỗi hay không
    let valid = true;
    //lấy ra this.state.errors kiểm tra
    let { errors, values } = this.state;
    for (let key in errors) {
      //nếu như có 1 trường error nào không hợp lệ 
      if (errors[key] !== "") {
        valid = false;
      }
    }

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("dữ liệu không hợp lệ");
      return;
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-header bg-dark text-white font-weight-bold">Form Đăng ký</div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input className="form-control" id="taiKhoan" name="taiKhoan" onChange={this.handleChangeInput} />
                  <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>

                <div className="form-group">
                  <p>Họ Tên</p>
                  <input className="form-control" id="hoTen" name="hoTen" onChange={this.handleChangeInput} />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>

                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input className="form-control" id="matKhau" name="matKhau" onChange={this.handleChangeInput} />
                  <p className="text-danger">{this.state.errors.matKhau}</p>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <p>Email</p>
                  <input typeMeta="email" className="form-control" id="email" name="email" onChange={this.handleChangeInput} />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>

                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input className="form-control" id="soDienThoai" name="soDienThoai" onChange={this.handleChangeInput} />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>

                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select className="form-control" id="maLoaiNguoiDung" name="maLoaiNguoiDung" onChange={this.handleChangeInput}>
                    <option>Quản trị</option>
                    <option>Người dùng</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button className="btn btn-success" type="submit">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
