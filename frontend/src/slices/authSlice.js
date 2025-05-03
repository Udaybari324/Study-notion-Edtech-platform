import { createSlice } from "@reduxjs/toolkit";
// Optional: Uncomment this if you want to decode token payload
// import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token") || null;

// Optional: decode token payload if needed
// let userInfo = null;
// if (token) {
//   try {
//     userInfo = jwt_decode(token);
//   } catch (error) {
//     console.error("Invalid token:", error);
//   }
// }

const initialState = {
  signupData: null,
  loading: false,
  token: token,
  // Optional: add userInfo if decoding token
  // user: userInfo,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Optional: persist token
    },
    // Optional: clear token
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setSignupData, setLoading, setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
