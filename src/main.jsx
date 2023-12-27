import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

import "./main.css";

// import { Counter } from "./components/Counter";
// import { PokemonApp } from "./components/pokemonApp";
import { TodoApp } from "./components/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Counter /> */}
      {/* <PokemonApp/> */}
      <TodoApp/>
    </Provider>
  </React.StrictMode>
);
