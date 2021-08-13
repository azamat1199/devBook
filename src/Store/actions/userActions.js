import * as actionTypes from "../actionTypes";

export const updateUserAction = ({ user, token }) => {
  return {
    payload: { user, token },
    type: actionTypes.UPDATE_LANGUAGE,
  };
};

export const updateLanguageAction = (lang) => {
  return {
    payload: lang,
    type: actionTypes.UPDATE_LANGUAGE,
  };
};

export const clearUserAction = () => {
  return {
    type: actionTypes.CLEAR_USER,
  };
};
