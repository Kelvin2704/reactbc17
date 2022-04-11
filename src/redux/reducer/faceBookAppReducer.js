import { COMMENT } from "../actions/types/faceBookAppType";

const stateDefault = {
  arrComment: [
    { name: "Lộc", content: "hello hello" },
    { name: "Nam", content: "hello hello" },
  ],
};

export const faceBookReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case COMMENT: {
      state.arrComment = [...state.arrComment, action.userComment];
      return { ...state };
    }
    default:
      return state;
  }
};
