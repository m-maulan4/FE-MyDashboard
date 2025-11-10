import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";
import type { formSchemaPost, resGetAllTodo, todoBackNext } from "./todoType";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getAllTodo: builder.query<resGetAllTodo, void>({
      query: () => "/todo",
      providesTags: ["todo"],
    }),
    postTodo: builder.mutation<void, formSchemaPost>({
      query: (body) => ({
        url: "/todo",
        method: "POST",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
    patchNextTodo: builder.mutation<void, todoBackNext>({
      query: (body) => ({
        url: "/todo/next",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
    patchBackTodo: builder.mutation<void, todoBackNext>({
      query: (body) => ({
        url: "/todo/back",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
    putEditTodo: builder.mutation<void, formSchemaPost>({
      query: (body) => ({
        url: "/todo",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  usePostTodoMutation,
  usePatchBackTodoMutation,
  usePatchNextTodoMutation,
} = todoApi;
