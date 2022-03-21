import { combineReducers, createStore } from "redux";

// import { gioHangReducer } from "./reducer/GioHangReducer";
let stateGioHangDefault = [
  {
    maSP: 1,
    tenSP: "iPhone",
    giaBan: 1000,
    soLuong: 1,
    hinhAnh: "https://i.pravatar.cc?u=1",
  },
];

const rootReducer = combineReducers({
  //nơi chứa state của các ứng dụng
  gioHangReducer: (state = stateGioHangDefault, action) => {
    switch (action.type) {
      case "THEM_GIO_HANG": {
        let gioHang = [...state,action.sanPhamClick];
        return gioHang;
      }
    }
    return state
  },
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
