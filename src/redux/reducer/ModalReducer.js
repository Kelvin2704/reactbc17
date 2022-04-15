import React from "react";

const stateDefault = {
  title: "Default title",
  Component: <div>Default Content</div>,
};

export const modalReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "OPEN_FORM": {
      state.title = action.title;
      state.Component = action.Component;
      return { ...state };
    }
    default:
      return state;
  }
};
