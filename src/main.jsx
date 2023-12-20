import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

import "./main.css";

import { Counter } from "./components/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);
