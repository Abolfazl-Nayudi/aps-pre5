import { useState } from "react";

// const CoolerCondition = () => {
//   const [isOn, setIsOn] = useState(false);

//   const handleCoolerState = () => {
//     // if (isOn) {
//     //   setIsOn(false);
//     // } else {
//     //   setIsOn(true);
//     // }

//     setIsOn(!isOn);
//   };

//   return (
//     <>
//       <p>the cooler is {isOn ? "ON" : "OFF"}</p>
//       <button onClick={handleCoolerState}>change cooler state</button>
//     </>
//   );

// -----------------------------------------

// const CoolerCondition = () => {
//   const [isOn, setIsOn] = useState(false);

//   const handleCoolerState = () => {
//     setIsOn(!isOn);
//   };

//   const data = [1, 2, 3, 4];

//   return (
//     <>
//       <p>{data && "data exists"}</p>
//       <button onClick={handleCoolerState}>change cooler state</button>
//     </>
//   );
// };

// -----------------------------------------

const CoolerCondition = () => {
  const [error, setError] = useState("");

  const handleFetchData = () => {
    // code
    setError("operation failed");
  };

  return (
    <>
      <button onClick={handleFetchData}>fetchData</button>

      {error && <p style={{ color: "crimson" }}>bye bedeh</p>}
    </>
  );
};

const Users = () => {
  const usersArray = ["ali", "john", "hantoosh", "hasem"];

  return (
    <>
      <ul>
        {usersArray?.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </>
  );
};

export { CoolerCondition, Users };
