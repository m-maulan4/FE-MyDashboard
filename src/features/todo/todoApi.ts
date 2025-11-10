import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";
import type { formSchemaPost, resGetAllTodo } from "./todoType";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllTodo: builder.query<resGetAllTodo, void>({
      query: () => "/todo",
    }),
    postTodo: builder.mutation<void, formSchemaPost>({
      query: (body) => ({
        url: "/todo",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllTodoQuery, usePostTodoMutation } = todoApi;
