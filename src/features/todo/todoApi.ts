import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";
import type { resGetAllTodo } from "./todoType";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllTodo: builder.query<resGetAllTodo, void>({
      query: () => "/todo",
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllTodoQuery } = todoApi;
