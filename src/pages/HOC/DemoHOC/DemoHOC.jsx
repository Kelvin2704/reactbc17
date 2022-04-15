import React from "react";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import ModalHOC from "./ModalHOC";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function DemoHOC() {
  const [ComponentContent, setComponentContent] = useState(<div>Default Content</div>);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3 className="display-4">Demo HOC modal</h3>
      <button
        className="btn btn-primary mr-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          // setComponentContent(<Register />);
          const action = {
            type: "OPEN_FORM",
            Component: <Register />,
            title: "Đăng ký",
          };
          dispatch(action);
        }}
      >
        Đăng ký
      </button>
      <button
        className="btn btn-success ml-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          // setComponentContent(<Login/>);
          const action = {
            type: "OPEN_FORM",
            Component: <Login />,
            title: "Đăng nhập",
          };
          dispatch(action);
        }}
      >
        Đăng nhập
      </button>

      {/* <ModalHOC
        title={"Đăng ký"}
        Component={(props) => {
          return <p>hello cybersoft</p>;
        }}
      /> */}

      {/* <ModalHOC title={"Đăng ký"} Component={<Login />} /> */}
      {/* <ModalHOC title={"Đăng ký"} Component={ComponentContent} /> */}
    </div>
  );
}

//HOC là higher-order component là 1 func nhận parameter là 1 component và return về 1 component mới
