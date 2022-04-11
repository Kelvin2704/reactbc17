import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getApiArrTaskAction } from "../../../../redux/actions/toDoListActions";

export default function ToDoListHook(props) {
  //   const [arrTask, setArrTask] = useState([]);
  const { arrTask } = useSelector((state) => state.toDoListReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    // Giống componentdidmount
    //gọi api
    // try {
    //   const result = await axios({
    //     //await: chờ chạy xong rồi làm tiếp
    //     url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    //     method: "get",
    //   });
    //   console.log(result);

    //   const action = {
    //     type: "GET_ALL_TASK_API",
    //     arrTask: result.data,
    //   };
    //   dispatch(action);

    //   //   console.log(result);
    //   //   await setArrTask(result.data);
    // } catch (err) {
    //   //   console.log({ err });
    //   //   //   if (err.response.status == 404) {
    //   //   //     alert("Api sai");
    //   //   //     props.history.push("/");
    //   //   //   }
    // }

    /**
     * trong redux có 2 dạng action
     * + action: {type:'',payload:'data_gui_di'}
     * + action : (dispatch) => {xử lý logic => dispatch}
     */

    const action = getApiArrTaskAction();
    dispatch(action);
  }, []);

  return (
    <div className="container">
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
                {arrTask
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
                {arrTask
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
