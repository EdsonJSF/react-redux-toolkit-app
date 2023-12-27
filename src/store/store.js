import { configureStore } from "@reduxjs/toolkit";

import { counterSlice, pokemonSlice } from "./slices";
import { todosApi } from "./apis";

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    pokemonReducer: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
