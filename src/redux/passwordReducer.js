import { ADD_PASSWORD, DELETE_PASSWORD } from "./actions";
import { produce } from "immer";

const initialState = [
  {
    name: "apple",
    password: "2342938sdfsdf2j3r",
  },
];

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PASSWORD:
//       return [...state, action.payload];
//     case DELETE_PASSWORD:
//       return state.slice(0, -1);
//     default:
//       return state;
//   }
// }

const reducer = produce((state, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      state.push(action.payload);
      break;
    case DELETE_PASSWORD:
      state.pop();
      break;
    default:
      return state;
  }
}, initialState);

export default reducer;
