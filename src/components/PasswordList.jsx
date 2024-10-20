import React from "react";
import { useSelector } from "react-redux";

// password, product, users

export default function PasswordList() {
  const passwords = useSelector((state) => state);
  return (
    <div>
      <ul>
        {passwords?.map((passwordObj) => {
          return (
            <li key={passwordObj.password}>
              <span>{passwordObj.name}</span>:{" "}
              <span>{passwordObj.password}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
