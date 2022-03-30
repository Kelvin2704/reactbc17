const stateDefault = {
  mangNguoiDung: [
    { taiKhoan: "nguyenVanA", hoTen: "Nguyễn Văn A", matKhau: "123123", email: "nguyenvana@gmail.com", maLoaiNguoiDung: "QuanTri", soDienThoai: "03010211" },
    { taiKhoan: "nguyenVanB", hoTen: "Nguyễn Văn B", matKhau: "123123", email: "nguyenvanb@gmail.com", maLoaiNguoiDung: "NguoiDung", soDienThoai: "093245671" },
  ],
  nguoiDungSua: {
    taiKhoan: "",
    hoTen: "",
    matKhau: "",
    email: "",
    maLoaiNguoiDung: "QuanTri",
    soDienThoai: "",
  },
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XOA_NGUOI_DUNG": {
      //sao chép ra mảng người dùng mới
      let mangNguoiDung = [...state.mangNguoiDung];
      // xóa người dùng
      mangNguoiDung = mangNguoiDung.filter((nd) => nd.taiKhoan !== action.taiKhoan);
      state.mangNguoiDung = mangNguoiDung;
      return { ...state };
    }
    case "THEM_NGUOI_DUNG": {
      let mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDung;
      return { ...state };
    }
    case "SUA_NGUOI_DUNG": {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }
    case "CAP_NHAT_THONG_TIN": {
      let mangNguoiDung = [...state.mangNguoiDung];
      let ndUpdate = mangNguoiDung.find((nguoiDung) => nguoiDung.taiKhoan === action.nguoiDung.taiKhoan);
      if (ndUpdate) {
        for (let key in ndUpdate) {
          ndUpdate[key] = action.nguoiDung[key];
        }
      }
      //cập nhật lại state
      state.mangNguoiDung = mangNguoiDung;
      return {...state};
    }
    default:
      return state;
  }
};
