import { startLoadingPokemons } from ".";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
  };
};
