import { combineReducers, createStore } from "redux";
import { gameXucXacReducer } from "./reducer/gameXucXacReducer";
import { gioHangReducer } from "./reducer/GioHangReducer";
import { quanLyNguoiDungReducer } from "./reducer/quanLyNguoiDungReducer";

// import { gioHangReducer } from "./reducer/GioHangReducer";

const rootReducer = combineReducers({
  //nơi chứa state của các ứng dụng
  gioHangReducer: gioHangReducer,
  gameXucXacReducer: gameXucXacReducer,
  quanLyNguoiDungReducer: quanLyNguoiDungReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
