import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";
import type { AuthState } from "../auth/authType";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    me: builder.query<AuthState, void>({
      query: () => "/me",
    }),
  }),
});

export const { useMeQuery, useLazyMeQuery } = userApi;
