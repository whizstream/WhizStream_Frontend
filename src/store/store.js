import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

//reducers
import snackbarReducer from "./reducer/snakbarReducer";
import authReducer from "./reducer/authReducer";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
