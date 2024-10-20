import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function MatchPasswordForm() {
  const [matchInputValue, setMatchInputValue] = useState("");
  const [message, setMessage] = useState("");

  const passwords = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const doesPasswordExists = passwords.find(
      (passwordObj) => passwordObj.password === matchInputValue
    );

    if (doesPasswordExists) {
      setMessage("password match");
    } else {
      setMessage("password does not match");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={matchInputValue}
          onChange={(e) => setMatchInputValue(e.target.value)}
        />
        <button>check</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
