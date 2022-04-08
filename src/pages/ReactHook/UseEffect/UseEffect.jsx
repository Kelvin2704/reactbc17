import React, { useState, useEffect } from "react";
import axios from "axios";
let timeOut;

export default function UseEffect() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(1);
  const [arrTask, setArrTask] = useState([]);

  // useEffect(() => {
  //   //Thực thi sau khi giao diện render và thực thi mỗi lần có bất kì state thay đổi
  //   console.log("componentDidMount & componentDidUpdate");
  // });

  useEffect(() => {
    console.log("componentDidUpdate => thực thi khi like thay đổi giá trị => shallow compare");
  }, [like]); //khi giá trị like thay đổi thì component gọi lại hàm useEffect này

  useEffect(() => {
    //Thực thi sau khi giao diện render lần đầu tiên
    console.log("componentDidMount");

    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    promise.then((result) => {
      console.log(result);
      setArrTask({
        arrTask: result.data,
      });
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });

    timeOut = setInterval(() => {
      console.log(1);
    }, 1000);

    return () => {
      //Chạy khi component mất trên giao diện (componentWillUnmount)
      clearInterval(timeOut);
    };
  }, []);

  console.log("render");

  return (
    <div className="container">
      <h3>Demo useEffect</h3>
      <h3>{number}</h3>
      <button
        className="btn btn-primary mr-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
      <hr />
      <h3>{like}</h3>
      <button
        className="btn btn-primary mr-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          setLike(like - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
