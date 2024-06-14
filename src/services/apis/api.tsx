import axios from "axios";
import { BASE_URL } from "./constant";
import { getBearerToken, getToken } from "./helpers";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = getBearerToken();
axios.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = getBearerToken();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      // console.log(error)
      return (window.location.href = "/signin");
    }
    return Promise.reject(error);
  }
);