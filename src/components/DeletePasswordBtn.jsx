import React from "react";
import { useDispatch } from "react-redux";
import { deletePassword } from "../redux/actionCreator";
export default function DeletePasswordBtn() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePassword());
  };

  return (
    <div>
      <button onClick={handleClick}>delete password</button>
    </div>
  );
}
