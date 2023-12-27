import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemons } from "../store/slices";

export const PokemonApp = () => {
  const { page, pokemons, isLoading } = useSelector(
    (state) => state.pokemonReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      {isLoading ? (
        <span>Loading ...</span>
      ) : (
        <>
          <ul>
            {pokemons.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <button
            disabled={page < 2}
            onClick={() => dispatch(getPokemons(page - 2))}
          >
            Back
          </button>
          <button onClick={() => dispatch(getPokemons(page))}>Next</button>
        </>
      )}
    </>
  );
};
