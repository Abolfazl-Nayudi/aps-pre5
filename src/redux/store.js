import { createStore } from "redux";
import passwordReducer from "./passwordReducer";

const store = createStore(
  passwordReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
