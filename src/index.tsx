import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from "./App";
import configureStore from './data/store';


const initialState = {};
let defaultStore = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={defaultStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
