import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePassword } from "../redux/passwordSlice";
// password, product, users, ads

export default function PasswordList() {
  // when the shape of store is an array
  // const passwords = useSelector((state) => state);

  // when the shape of store is an object
  const passwords = useSelector((state) => state.passwords);
  console.log(passwords);

  const dispatch = useDispatch();

  const handleDeletePassword = (password) => {
    console.log(password);
    console.log("hi");

    // dispatch(deletePassword({ passwordShouldDeleted: password }));
  };

  return (
    <div>
      <ul>
        {passwords.map((obj) => {
          return (
            <li
              key={obj.password}
              onClick={(e) => handleDeletePassword(obj.password)}
            >
              <span>{obj.name}</span>: <span>{obj.password}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
