import { COMMENT } from "./types/faceBookAppType";

export const commentAction = (userComment) => {
  return {
    type: COMMENT,
    userComment,
  };
};
