import React from 'react';
import ReactDOM from 'react-dom';
import CounterComponent from './App';
import { createStore } from "redux";
import allReducers from "./reducer";
import { Provider } from "react-redux";


const store = createStore(
  allReducers,
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <CounterComponent/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



