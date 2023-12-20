import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      Hello
    </Provider>
  </React.StrictMode>
);
