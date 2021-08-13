import { createContext } from "react";

const authContext = createContext({
  user: {},
  token: "",
  loggedIn: false,
  setAuthDetails: () => {},
});

export default authContext;
