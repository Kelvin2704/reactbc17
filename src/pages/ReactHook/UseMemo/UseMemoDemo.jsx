import React, { useState, useMemo } from "react";
import Cart from "./Cart";
let cart = [
  { id: 1, name: "iphone", price: 1000 },
  { id: 2, name: "htcphone", price: 2000 },
  { id: 3, name: "lgphone", price: 3000 },
];

export default function UseMemoDemo() {
  let [like, setLike] = useState(1);

  // const cartMemo = useMemo(() => cart, []);

  return (
    <div className="m-5">
      Like : {like}
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        tym
      </span>
      <br />
      <br />
      <Cart cart={cart} />
    </div>
  );
}
