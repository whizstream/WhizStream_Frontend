import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";

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
  // applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
