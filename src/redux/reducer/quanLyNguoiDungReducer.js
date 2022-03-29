const stateDefault = {
  mangNguoiDung: [
    { taiKhoan: "nguyenVanA", hoTen: "Nguyễn Văn A", matKhau: "123123", email: "nguyenvana@gmail.com", loaiNguoiDung: "QuanTri", soDienThoai: "03010211" },
    { taiKhoan: "nguyenVanB", hoTen: "Nguyễn Văn B", matKhau: "123123", email: "nguyenvanb@gmail.com", loaiNguoiDung: "NguoiDung", soDienThoai: "093245671" },
  ],
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
