import axios from "axios";
import store from "./../Store/index";
// import { CLEAR_USER } from "./../Store/actionTypes";

const Axios = axios.create({
  baseURL: "/api/",
  timeout: 30000,
});

Axios.interceptors.request.use(
  (configs) => {
    const token =
      store.getState().user.token || localStorage.getItem("token") || "";

    // const token = localStorage.getItem("token");
    configs.headers.Authorization = token ? `Bearer ${token} ` : "";
    configs.headers.language = "ru";
    return configs;
  },
  (err) => {
    console.log(err);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err.response);
    if (err.response.status === 401) {
      // localStorage.clear();
      // store.dispatch({ type: CLEAR_USER });
      window.localStorage.href = "/sign-in";
    }
    return Promise.reject(err);
  }
);

export default Axios;
