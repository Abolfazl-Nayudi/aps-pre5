import React from "react";

export default function Child({ firstName, email, password }) {
  return (
    <div>
      <p>firstName: {firstName}</p>
      <p>email: {email}</p>
      <p>password: {password}</p>
      <hr />
    </div>
  );
}
