import React, { useState } from "react";

function ControlledComponent() {
  const [inputData, setInputData] = useState("somthing default");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  console.log(inputData);

  return (
    <div>
      <input
        type="text"
        name="write"
        value={inputData}
        onChange={handleChange}
      />
      <p>{inputData}</p>
    </div>
  );
}

export default ControlledComponent;
