import * as actionTypes from "../../Store/actionTypes";
import axios from "../../utilis/axios";

const fetchMyBookStart = () => {
  return {
    type: actionTypes.FETCH_MY_BOOKS_STARTED,
  };
};

const fetchMyBookSuccess = (payload) => {
  return {
    payload,
    type: actionTypes.FETCH_MY_BOOKS_SUCCESS,
  };
};

const fetchMyBookError = (error) => {
  return {
    type: actionTypes.FETCH_MY_BOOKS_ERROR,
    payload: error,
  };
};

export const fetchMyBooksActios = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMyBookStart());
      const { data } = await axios.get(`/books/my-books`);
      dispatch(fetchMyBookSuccess(data.payload));
    } catch (error) {
      console.log(error);
      console.log(error.payload?.data);
      dispatch(fetchMyBookError(error.message));
    }
  };
};
