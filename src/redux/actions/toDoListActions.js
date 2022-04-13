import axios from "axios";
export const getApiArrTaskAction = () => {
  return async (dispatch) => {
    // gọi api
    try {
      const result = await axios({
        //await: chờ chạy xong rồi làm tiếp
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "get",
      });
      console.log(result);

      const action = {
        type: "GET_ALL_TASK_API",
        arrTask: result.data,
      };
      dispatch(action);

      //   console.log(result);
      //   await setArrTask(result.data);
    } catch (err) {
      //   console.log({ err });
      //   //   if (err.response.status == 404) {
      //   //     alert("Api sai");
      //   //     props.history.push("/");
      //   //   }
    }
  };
};

export const addTaskAction = (task) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/AddTask`,
        method: "POST",
        data: task, //{taskName:'',status:false}
      });

      //Gọi api getAllTask
      console.log("result", result);
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const checkDoneTaskAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}
        `,
        method: "PUT",
      });
      console.log("thành công", result);
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTaskApiAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}
        `,
        method: "DELETE",
      });
      console.log("thành công", result);
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const rejectTaskApiAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
        method: "PUT",
      });
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
