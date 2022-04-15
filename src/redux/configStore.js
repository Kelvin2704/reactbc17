import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { faceBookReducer } from "./reducer/faceBookAppReducer";
import { gameXucXacReducer } from "./reducer/gameXucXacReducer";
import { gioHangReducer } from "./reducer/GioHangReducer";
import { quanLyNguoiDungReducer } from "./reducer/quanLyNguoiDungReducer";
import { toDoListReducer } from "./reducer/ToDoListReducer";
import thunk from "redux-thunk";
import { modalReducer } from "./reducer/ModalReducer";

// import { gioHangReducer } from "./reducer/GioHangReducer";

const rootReducer = combineReducers({
  //nơi chứa state của các ứng dụng
  gioHangReducer: gioHangReducer,
  gameXucXacReducer: gameXucXacReducer,
  quanLyNguoiDungReducer: quanLyNguoiDungReducer,
  faceBookReducer,
  toDoListReducer,
  modalReducer,
});
// cấu hình thunk
const middleWare = applyMiddleware(thunk);

const customCompose = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, customCompose);
