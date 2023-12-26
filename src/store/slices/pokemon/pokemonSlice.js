import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log("setPokemons");
      console.log(state);
      console.log(action);
    },
  },
});

export const { startLoading, setPokemons } = pokemonSlice.actions;
