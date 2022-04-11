import React, { Component } from "react";
import axios from "axios";
import { getApiArrTaskAction } from "../../../redux/actions/toDoListActions";

export default class ToDoApp extends Component {
  state = {
    arrTask: [],
  };

  getTaskApi = () => {
    // this.props.dispatch(getApiArrTaskAction);
    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    //success
    promise.then((result) => {
      console.table(result.data);
      this.setState({
        arrTask: result.data,
      });
    });
    //fail
    promise.catch((error) => {
      console.log(error);
    });
  };
  componentDidMount() {
    //ham lifecycle nay se chay sau khi render dc thuc hien
    this.getTaskApi();
  }
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => {
            this.getTaskApi();
          }}
        >
          Get all task
        </button>
        <h3 className="text-center">To do App</h3>
        <div className="card">
          <div className="card-header">
            <div className="input-group-prepend mb-3">
              <span className="input-group-text btn btn-success">Add task</span>
              <input className="form-control" id="taskName" />
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  {/* cac viec lam roi */}
                  {this.state.arrTask
                    .filter((task) => task.status === true)
                    .map((task, index) => {
                      return (
                        <tr key={index}>
                          <td>{task.taskName}</td>
                          <td>
                            <span className="badge badge-success">Complete</span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot>
                  {/* cac viec chua lam */}
                  {this.state.arrTask
                    .filter((task) => task.status === false)
                    .map((task, index) => {
                      return (
                        <tr key={index}>
                          <td>{task.taskName}</td>
                          <td>
                            <span className="badge badge-danger">InComplete</span>
                          </td>
                        </tr>
                      );
                    })}
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
