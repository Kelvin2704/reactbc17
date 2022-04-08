import React, { memo } from "react";

function CardProduct(props) {
  console.log("render card");
  return (
    <div className="card text-left w-25 mt-2">
      <img src="https://picsum.photos/200" alt="..." className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{props.renderLike()} like</h4>
        <p className="card-text">Body</p>
      </div>
    </div>
  );
}

export default memo(CardProduct);
