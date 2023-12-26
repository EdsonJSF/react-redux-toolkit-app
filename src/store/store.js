import { configureStore } from "@reduxjs/toolkit";

import { counterSlice, pokemonSlice } from "./slices";

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    pokemonReducer: pokemonSlice.reducer,
  },
});
