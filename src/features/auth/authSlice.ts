import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authType";

const initialState: AuthState = {
  username: "",
  token_csrf: "",
};
const AUTH_STORAGE = "user";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.token_csrf = action.payload.token_csrf;
      const dataToPersist = {
        username: action.payload.username,
        token_csrf: action.payload.token_csrf,
      };
      localStorage.setItem(AUTH_STORAGE, JSON.stringify(dataToPersist));
    },
    logout: (state) => {
      state.username = "";
      state.token_csrf = "";
      localStorage.removeItem(AUTH_STORAGE);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
