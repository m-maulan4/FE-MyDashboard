import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authType";

const initialState: AuthState = {
  username: "",
  access_token: "",
};
const AUTH_STORAGE = "user";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const dataToPersist = {
        username: action.payload.username,
        access_token: action.payload.access_token,
      };
      localStorage.setItem(AUTH_STORAGE, JSON.stringify(dataToPersist));
    },
    logout: () => {
      localStorage.removeItem(AUTH_STORAGE);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
