import { useState } from "react";
import { Button, Input } from "./components/react3/1-events";
import ButtonWithProps from "./components/react3/2-functionAndProps";
import {
  Cooler,
  Counter,
  DoubleIncrement,
  GenerateCode,
} from "./components/react3/3-states";
import DataFetcher from "./components/react4/1-DataFetcher";
import { CoolerCondition } from "./components/react4/2-ConditionalRendering";
import DataFetcherWithDependecy from "./components/react4/3-DependencyArray";
import ControlledComponent from "./components/react4/4-ControlledComponent";

// ---------------------react 3---------------------------
// function App() {
//   const hanldeSignupClick = () => {
//     alert("you signed up into your account");
//   };

//   return (
//     <>
//       {/* events */}
//       {/* <Button /> */}
//       {/* <Input /> */}

//       {/* functions as props */}
//       {/* <ButtonWithProps name="login" handler={() => console.log("logged in")} />
//       <ButtonWithProps name="sing up" handler={hanldeSignupClick} /> */}

//       {/* states */}
//       {/* <Counter /> */}
//       {/* <Cooler /> */}
//       {/* <GenerateCode /> */}
//       <DoubleIncrement />
//     </>
//   );
// }

//------------------------react4--------------------------

function App() {
  return (
    <>
      {/* useEffect */}
      {/* <DataFetcher /> */}

      {/* conditional rendering */}
      {/* <CoolerCondition /> */}

      {/* useEffect with dependecny array */}

      {/* controlled Component */}
      {/* <ControlledComponent /> */}
    </>
  );
}

// --------------------------useEffect with dependecy----------------------------

// function App() {
//   const [dataType, setDataType] = useState("");

//   function handleTodosClick() {
//     setDataType("todos");
//   }
//   function handlePostsClick() {
//     setDataType("posts");
//   }

//   return (
//     <>
//       <div className="app">
//         <div>
//           <button onClick={handleTodosClick}>data for todos</button>
//           <button onClick={handlePostsClick}>data for posts</button>
//         </div>
//         <hr />

//         {dataType ? <DataFetcherWithDependecy type={dataType} /> : "nothing"}
//       </div>
//     </>
//   );
// }

export default App;
