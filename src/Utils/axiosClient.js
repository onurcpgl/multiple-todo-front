import axios from "axios";
import tokenService from "../Service/tokenService";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logOut, login } from "../Redux/Reducers/Auth/AuthReducer";
import store from "../Redux/Store/store";

const axiosClient = axios.create({
  baseURL: `https://localhost:7088/`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  function (request) {
    const token = tokenService.getToken();
    if (token) {
      request.headers["Authorization"] = "Bearer " + token;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    console.log(response);
    return response.data;
  },
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = tokenService.refreshToken();
      if (!refresh) {
        const dispatch = useDispatch();
        dispatch(logOut());
      } else {
        return axiosClient
          .post("refresh-token", refresh, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.message === "200") {
              const dispatch = store.dispatch;
              dispatch(login(res.response));

              axios.defaults.headers.common["Authorization"] =
                "Bearer " + tokenService.getToken();
              originalRequest.headers["Authorization"] =
                "Bearer " + tokenService.getToken();
              return axios(originalRequest);
            } else {
              const dispatch = store.dispatch;
              dispatch(logOut());
            }
          })
          .catch((error) => {
            const dispatch = store.dispatch;
            dispatch(logOut());
            return Promise.reject(error);
          });
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
