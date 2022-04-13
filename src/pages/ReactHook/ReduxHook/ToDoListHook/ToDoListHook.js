import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getApiArrTaskAction, addTaskAction, checkDoneTaskAction, deleteTaskApiAction, rejectTaskApiAction } from "../../../../redux/actions/toDoListActions";

export default function ToDoListHook(props) {
  const [task, setTask] = useState({
    taskName: "",
    status: false,
  });
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

  const addTaskApi = async (e) => {
    //khi người dùng submit hoạt enter
    //xử lý nghiệp vụ thêm task
    e.preventDefault();

    //sau khi gọi hàm kết quả trả về là (dispatch)
    const action = addTaskAction(task);
    dispatch(action);
  };

  const handleCheckDoneTask = (taskName) => {
    const action = checkDoneTaskAction(taskName);
    dispatch(action);
  };

  const handleDeleteTask = (taskName) => {
    const action = deleteTaskApiAction(taskName);
    dispatch(action);
  };

  const handleRejectTask = (taskName) => {
    const action = rejectTaskApiAction(taskName);
    dispatch(action);
  };

  console.log(task);
  return (
    <div className="container">
      <h3 className="text-center">To do App</h3>

      <form className="card" onSubmit={addTaskApi}>
        <div className="card-header">
          <div className="input-group-prepend mb-3">
            <button type="submit" className="input-group-text btn btn-success">
              Add task
            </button>
            <input
              className="form-control"
              id="taskName"
              onChange={(e) => {
                let { value, id } = e.target;
                setTask({
                  ...task,
                  [id]: value,
                });
              }}
            />
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

                          <i className="fa fa-undo text-warning" onClick={()=>{
                            handleRejectTask(task.taskName)
                          }} style={{ padding: 10, cursor: "pointer", fontSize: 30 }} />
                          <i
                            className="fa fa-trash text-danger"
                            onClick={() => {
                              handleDeleteTask(task.taskName);
                            }}
                            style={{ padding: 10, cursor: "pointer", fontSize: 30 }}
                          />
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

                          <i
                            className="fa fa-check-circle text-success"
                            onClick={() => {
                              handleCheckDoneTask(task.taskName);
                            }}
                            style={{ padding: 10, cursor: "pointer", fontSize: 30 }}
                          />
                          <i
                            className="fa fa-trash text-danger"
                            onClick={() => {
                              handleDeleteTask(task.taskName);
                            }}
                            style={{ padding: 10, cursor: "pointer", fontSize: 30 }}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tfoot>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}
