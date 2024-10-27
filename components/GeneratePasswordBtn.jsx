import React, { useState } from "react";
import { createPassword } from "../redux/passwordSlice";
import { useDispatch } from "react-redux";
import { passwordGenerator } from "../utils/passwordGenerator";

export default function GeneratePasswordBtn() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //  const action = createPassword({
    //     name: inputValue,
    //     password: passwordGenerator()
    //   });

    dispatch(
      createPassword({
        name: inputValue,
        password: passwordGenerator(),
      })
    );

    setInputValue("");

    // const action = addPassword({
    //   name: inputValue,
    //   password: passwordGenerator(),
    // });

    // dispatch(
    //   createPassword({
    //     name: inputValue,
    //     password: passwordGenerator(),
    //   })
    // );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button>Generate</button>
      </form>
    </div>
  );
}
