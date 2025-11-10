import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
import { todoApi } from "@/features/todo/todoApi";
// --- store ---
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
