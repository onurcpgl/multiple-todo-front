import Cookies from "js-cookie";
import axiosClient from "../Utils/axiosClient";

const setToken = (token) => {
  Cookies.set("jwt", token);
};
const getToken = () => {
  return Cookies.get("jwt");
};
const refreshToken = () => {
  return Cookies.get("refreshToken");
};
const tokenService = { setToken, getToken, refreshToken };

export default tokenService;
