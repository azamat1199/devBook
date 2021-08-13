import axios from "axios";

const Axios = axios.create({
  baseURL: "./api/",
  timeout: 30000,
});

Axios.interceptors.request.use(
  (configs) => {
    const token = localStorage.getItem("token");
    configs.headers.Authotization = token ? `Bearer ${token}` : "";
    configs.headers.language = "";
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
      localStorage.clear();
      window.localStorage.href = "/sign-in";
    }
    return Promise.reject(err);
  }
);

export default Axios;
