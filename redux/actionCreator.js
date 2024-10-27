import { ADD_PASSWORD, DELETE_PASSWORD } from "./actions";

const addPassword = (data) => {
  return {
    type: ADD_PASSWORD,
    payload: data,
  };
};

const deletePassword = () => {
  return {
    type: DELETE_PASSWORD,
  };
};

export { addPassword, deletePassword };
