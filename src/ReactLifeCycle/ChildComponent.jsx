import React, { Component, PureComponent } from "react";
/**
 * purecomponent giống component tuy nhiên không có lifecycle shouldComponentUpdate
 * mà purecomponent sẽ tự nhận biết các giá trị props sau mỗi lần render có thay đổi hay không
 * (nhận biết theo shallow compare - chỉ nhận biết được primitive value (kiểu dữ liệu cơ sở: number, string, boolean ...))
 */

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return currentState;
  }

  //   shouldComponentUpdate(newProps,newState) {
  //         console.log('newProps',newProps);
  //         console.log('props',this.props)
  //         console.log('shouldComponentUpdate');

  //         if(newProps.number === this.props.number) {
  //             return false;
  //         }

  //         return true;
  //     }

  render() {
    console.log("render child");
    return (
      <div className="p-5 text-white bg-dark font-weight-bold">
        <h3>Child Component</h3>
        <h3>Number Props: {this.props.objectNum.number}</h3>
      </div>
    );
  }
  timeOut = {};
  componentDidMount() {
    this.timeOut = setInterval(() => {
      console.log(123);
    }, 1000);

    console.log("componentDidMount child");
  }

  componentWillUnmount() {
    //Chạy trước khi component mất đi => handle các tình huống chạy script ngầm
    clearInterval(this.timeOut);
  }
}
