import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducer/GioHangReducer";

// import { gioHangReducer } from "./reducer/GioHangReducer";

const rootReducer = combineReducers({
  //nơi chứa state của các ứng dụng
  gioHangReducer: gioHangReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
