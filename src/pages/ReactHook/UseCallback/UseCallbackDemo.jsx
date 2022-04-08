import React, { useState, useCallback } from "react";
import CardProduct from "./CardProduct";

export default function UseCallbackDemo() {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);

  const renderLike = () => {
    return " ban da tha" + like;
  };

  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="container">
      <h3>{number}</h3>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>

      <hr />
      <h3>{like}</h3>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setLike(like - 1);
        }}
      >
        -
      </button>

      <CardProduct renderLike={callBackRenderLike} />
    </div>
  );
}
