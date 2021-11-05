import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { basket } from "./reducers/basket";

export const store = createStore(
  combineReducers({ basket }),
  composeWithDevTools()
);
