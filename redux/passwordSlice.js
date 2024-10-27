import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: "password",
  initialState: [],
  reducers: {
    createPassword: (state, action) => {
      //   return [...state , action.payload]
      state.push(action.payload);
    },
    deletePassword: (state, action) => {
      // return state.slice(0, -1)
      // state.pop();

      // return state.filter(
      //   (passwordObj) =>
      //     passwordObj.password !== action.payload.passwordShouldDeleted
      // );

      return state.filter((passwordObj) => {
        if (passwordObj.password === action.payload.passwordShouldDeleted) {
          return false;
        } else {
          return true;
        }
      });
    },
    editPassword: (state, action) => {
      // return state.map((passwordObject) => {
      //   if (passwordObject.password === action.payload.oldPassword) {
      //     return {
      //       name: passwordObject.name,
      //       password: action.payload.newPassword,
      //     };
      //   } else {
      //     return passwordObject;
      //   }
      // });

      for (let i = 0; i < state.length; i++) {
        if (state[i].password === action.payload.oldPassword) {
          state[i].password = action.payload.newPassword;
          break;
        }
      }
    },
  },
});

// const createPassowrd = passwordSlice.actions.createPassword;
// const deletePassword = passwordSlice.actions.deletePassword;
// const editPassword = passwordSlice.actions.editPassword;

// export { createPassowrd, deletePassword, editPassword };

export const { createPassword, deletePassword, editPassword } =
  passwordSlice.actions;

export default passwordSlice.reducer;
