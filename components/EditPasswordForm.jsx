import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPassword } from "../redux/passwordSlice";
import { passwordGenerator } from "../utils/passwordGenerator";

export default function EditPasswordForm() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editPassword({
        oldPassword: inputValue,
        newPassword: passwordGenerator(),
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pass">old Password</label>
        <input
          type="text"
          id="pass"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>EDIT</button>
      </form>
    </div>
  );
}
