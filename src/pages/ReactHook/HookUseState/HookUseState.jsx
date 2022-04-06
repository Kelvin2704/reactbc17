import React, { useState } from "react";
import ChonXe from "./ChonXe";

export default function HookUseState() {
  /*
    this.state = {
        like: 1
    }
     */
  let [state, setState] = useState({ like: 1 }); //useState(StateDefault)
  let [like, setLike] = useState(1);
  let [fontSize, setFontSize] = useState(15);
  let [imgSrc, setImgSrc] = useState("https://i.pravatar.cc?u=1");
  return (
    <div className="container">
      <div className="card w-25 mt-2">
        <img src="https://i.pravatar.cc?u=27" alt="..." />
        <div className="card-body">
          <p className="text text-danger ml-3">{like}</p>

          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>
      <hr />
      <h3>Bt tang font chu</h3>
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque error, repudiandae recusandae, odit in earum ea voluptatibus eum delectus ipsa
        neque non voluptatum! Voluptate, ducimus excepturi perferendis accusantium hic quisquam.
      </p>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setFontSize(fontSize + 5);
        }}
      >
        +
      </button>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setFontSize(fontSize + 5);
        }}
      >
        -
      </button>
      <br />
      <h3>Bai tap random anh</h3>
      <div className="card w-25">
        <img src={imgSrc} alt="..." />
        <div className="card-body w-100">
          <button
            className="btn btn-danger"
            onClick={() => {
              let number = Math.floor(Math.random() * 100);
              setImgSrc(`https://i.pravatar.cc?u=${number}`);
            }}
          >
            Random
          </button>
        </div>
      </div>
      <h3>Chon mau xe</h3>
      <ChonXe />
    </div>
  );
}
