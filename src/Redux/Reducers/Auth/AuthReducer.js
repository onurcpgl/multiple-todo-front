import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const initialState = {
  user: localStorage.getItem("user") || null,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", true);
      state.user = true;
      Cookies.set("jwt", action.payload);
    },
    logOut: (state, action) => {
      state.user = false;
      localStorage.removeItem("user");
      Cookies.remove("jwt");
    },
  },
});

export const { login, logOut } = authReducer.actions;

export default authReducer.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentAccesToken = (state) => state.auth.token;
export const selectCurrentUserId = (state) => state.auth.userId;
