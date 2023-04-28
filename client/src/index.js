import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"; 
import globalReducer from "state"; 
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from "state/api";


//set up store to use the redux toolkit as a boilerplate
//add a middleware and set up listeners to use the toolkit for my API calls
const store = configureStore({
  reducer: {
    global: globalReducer, 
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});
setupListeners(store.dispatch);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);


