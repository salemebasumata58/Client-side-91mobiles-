import {
  combineReducers,
  compose,
  legacy_createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { fileReducer } from "./product/reducer";
let rootReducer = combineReducers({
    auth: authReducer,
    file: fileReducer
});
let createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
