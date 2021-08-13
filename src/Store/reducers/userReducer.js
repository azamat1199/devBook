import * as actionTypes from "../actionTypes";

const initialState = {
  token: null,
  user: {},
};

const userReducer = (state = initialState, action) => {
  const { user, token } = { ...action?.payload };

  switch (action.type) {
    case actionTypes.UPDATE_USER:
    case actionTypes.AUTH_SIGN_UP: {
      return { ...state, user, token };
    }
    case actionTypes.UPDATE_LANGUAGE: {
      return {
        ...state,
        user: {
          ...state.user,
          lang: action.payload,
        },
      };
    }
    case actionTypes.CLEAR_USER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
