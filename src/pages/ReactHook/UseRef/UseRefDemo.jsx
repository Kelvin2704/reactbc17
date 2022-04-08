import React, { useRef, useState } from "react";

/**
 * useRef:
 * - dungf để dom đến tag jsx
 * - cache lại giá trị sau mỗi lần component render
 *- useRef không bị ảnh hưởng bới setState (Dùng để lưu những giá trị ngầm thay đổi mà không cần render lên giao diện)
 */

export default function UseRefDemo() {
  const [userLogin, setUserLogin] = useState({ taiKhoan: "", matKhau: "" });
  let refTuKhoaTimKiem = useRef("");
  const inputTaiKhoan = useRef("");
  const inputMatKhau = useRef("");

  console.log(userLogin);

  const handleChange = (e) => {
    let { id, value } = e.target;
    setUserLogin({
      ...userLogin,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let taiKhoan = inputTaiKhoan.current.value;
    let matKhau = inputMatKhau.current.value;
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group mt-2">
        <p>{refTuKhoaTimKiem.current}</p>
        <input
          className="form-control w-25"
          onChange={(e) => {
            refTuKhoaTimKiem.current = e.target.value;
            console.log("tu khoa", refTuKhoaTimKiem);
          }}
        />
      </div>
      <hr />
      <h3>Đăng nhập</h3>
      <div className="form-group">
        <p>tài khoản</p>
        <input ref={inputTaiKhoan} className="form-control" id="taiKhoan" onChange={handleChange} />
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input ref={inputMatKhau} className="form-control" id="matKhau" onChange={handleChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Đăng nhập</button>
      </div>
    </form>
  );
}
