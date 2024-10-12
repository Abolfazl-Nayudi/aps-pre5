import { useState } from "react";

// const names = ['alireza', 'mahdi', 'mohammad mahdi']

// const [name1, name2] = names

const Counter = () => {
  console.log("rendered");

  //   let count = 0;

  //   const handleClick = () => {
  //     console.log("clicked");

  //     count++;

  //     console.log(count);
  //   };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // count++
    // const randomNum = Math.random();
    // setCount(randomNum);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    // setCount(count - count); // founded by reyhaneh
    setCount(0);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

const Authentication = () => {
  const [auth, setAuth] = useState("logged out");

  const handleLogin = () => {
    setAuth("logged in");
  };
  const handleLogout = () => {
    setAuth("logged out");
  };

  return (
    <div>
      <p>{auth}</p>
      <button onClick={handleLogin}>logged in</button>
      <button onClick={handleLogout}>logged out</button>
    </div>
  );
};

const Cooler = () => {
  const [coolerState, setCoolerState] = useState("off");

  const handleTurnOn = () => {
    setCoolerState("on");
  };

  const handleTurnOff = () => {
    setCoolerState("off");
  };

  return (
    <>
      <p>the cooler is {coolerState}</p>

      <button onClick={handleTurnOn}>turn on</button>
      <button onClick={handleTurnOff}>turn off</button>
    </>
  );
};

const GenerateCode = () => {
  const [codes, setCodes] = useState([]);

  const handleClick = () => {
    const generatedCode = Math.floor(10000 + Math.random() * 90000);
    codes.push("2342");
    setCodes([...codes, generatedCode]);
  };

  console.log(codes);

  return (
    <>
      {/* <p>{codes}</p> */}
      <button onClick={handleClick}>generate</button>
      <ul>
        {codes.map((code) => {
          return <li key={code}>{code}</li>;
        })}
      </ul>
    </>
  );
};

const DoubleIncrement = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    // console.log(count);
    // setCount(count + 1);

    // کاری به ریرندرینگ نداره
    // دیتا رو قبل از ریرندرینگ میگیره
    // در اخر دیتا رو داخل ستیت ذخیره میکنه

    setCount((prev) => prev + 1);
    console.log(count);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
};
export { Counter, Cooler, GenerateCode, DoubleIncrement, Authentication };
