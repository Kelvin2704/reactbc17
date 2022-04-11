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
