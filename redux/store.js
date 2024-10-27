// import { createStore } from "redux";
// import passwordReducer from "./passwordReducer";

// const store = createStore(
//   passwordReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// --------------------------------------
// redux toolkit
import passwordReducer from "./passwordSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // reducer: passwordReducer,
  reducer: {
    passwords: passwordReducer,
  },
  // devTools: false
});

export default store;
