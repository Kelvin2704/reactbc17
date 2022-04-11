import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commentAction } from "../../../redux/actions/faceBookAppActions";

export default function ReduxHook(props) {
  const [userComment, setUserComment] = useState({
    name: "",
    content: "",
  });
  const dispatch = useDispatch();

  // useSelector giong ham mapStateToProps dung de lay du lieu tu reducer ve
  // const arrComment = useSelector((rootReducer) => rootReducer.faceBookReducer.arrComment);
  // cách lấy về nhanh hơn nữa
  const { arrComment } = useSelector((rootReducer) => rootReducer.faceBookReducer);

  //sử dụng useDispatch giống props.dispatch

  console.log("arrComment", arrComment);

  //   console.log("userComment", userComment);
  const handleChange = (e) => {
    let { id, value } = e.target;
    setUserComment({
      ...userComment,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //gửi dữ liệu
    console.log("submit", userComment);

    // dispatch khi submit
    const action = commentAction(userComment);
    dispatch(action);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          {arrComment.map(({ name, content }, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img src={`https://i.pravatar.cc?u=${name}`} alt="..." width={50} height={50} />
                </div>
                <div className="col-10">
                  <p className="text-danger">{name}</p>
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form className="card-body bg-dark text-white" onSubmit={handleSubmit}>
          <div className="form-group">
            <p>name</p>
            <input id="name" className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>content</p>
            <input id="content" className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
