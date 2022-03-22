let stateGioHangDefault = [
  {
    maSP: 1,
    tenSP: "iPhone",
    giaBan: 1000,
    soLuong: 1,
    hinhAnh: "https://i.pravatar.cc?u=1",
  },
];
export const gioHangReducer = (state = stateGioHangDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        let gioHang = state;
        let spGH = { ...action.sanPhamClick, soLuong: 1 };
        let sp = gioHang.find((spGH) => spGH.maSP === action.sanPhamClick.maSP);
        if (sp) {
          sp.soLuong += 1;
        } else {
          gioHang.push(spGH);
        }
        console.log(gioHang);
        return [...gioHang];
      }
  }
  return state;

};
