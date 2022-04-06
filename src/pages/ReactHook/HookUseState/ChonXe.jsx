import React,{useState} from "react";

export default function ChonXe() {
    let [img,setImg] = useState('./img/black-car.jpg')
  return (
    <div className="row">
      <div className="col-6">
        <img src={img} alt="..." className="w-100" />
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-dark text-white" onClick={()=>{
                setImg('./img/black-car.jpg')
            }}>Black car</button>
          </div>
          <div className="col-4">
            <button className="btn btn-danger text-white"onClick={()=>{
                setImg('./img/red-car.jpg')
            }}>red car</button>
          </div>
          <div className="col-4">
            <button className="btn btn-secondary text-white" onClick={()=>{
                setImg('./img/silver-car.jpg')
            }}>silver car</button>
          </div>
        </div>
      </div>
    </div>
  );
}
