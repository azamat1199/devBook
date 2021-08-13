// import { returnStatement } from "@babel/types";
import * as actionTypes from "../actionTypes";

export const signUpAction = (payload) => {
  return {
    payload,
    type: actionTypes.AUTH_SIGN_UP,
  };
};
