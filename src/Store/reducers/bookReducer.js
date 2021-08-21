// import { action } from "commander";
import * as actionTypes from "../actionTypes";

const initialState = {
  success: true,
  error: false,
  errorMsg: null,
  loading: false,
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.types) {
    case actionTypes.FETCH_MY_BOOKS_STARTED: {
      return { ...state, success: false, loading: true };
    }
    case actionTypes.FETCH_MY_BOOKS_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        books: action.payload,
      };
    }
    case actionTypes.FETCH_MY_BOOKS_ERROR: {
      return {
        ...state,
        success: false,
        loading: false,
        error: false,
        errorMsg: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default bookReducer;
