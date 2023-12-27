import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodoByID: builder.query({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIDQuery } = todosApi;
