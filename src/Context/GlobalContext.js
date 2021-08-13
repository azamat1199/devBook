// import { createContext } from "jest-runtime";
import { createContext } from "react";

export const initialState = {
  user: { lang: "uz" },
  token: "",
  setLang: () => {},
  setAuthDetails: () => {},
};

const GlobalContext = createContext(initialState);

export default GlobalContext;
