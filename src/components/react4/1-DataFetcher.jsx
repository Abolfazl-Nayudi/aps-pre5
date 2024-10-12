import { useState, useEffect } from "react";

// function DataFetcher() {
//   let apiData = null;

//   fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     .then((res) => res.json())
//     .then((data) => {
//       apiData = data;
//       console.log(apiData);
//     });

//   if (apiData) {
//     return <p>{apiData.title}</p>;
//   } else {
//     return <p>loading...</p>;
//   }
// }

// --------------------------------------

// function DataFetcher() {
//   //   let apiData = null;

//   const [apiData, setApiData] = useState(null);

//   fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     .then((res) => res.json())
//     .then((data) => {
//         setApiData(data);
//     });

//   console.log(apiData);

//   if (apiData) {
//     return <p>{apiData.title}</p>;
//   } else {
//     return <p>loading...</p>;
//   }
// }

// ------------------------------------

function DataFetcher() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      });
  }, []);

  console.log(apiData);

  if (apiData) {
    return <p>{apiData.title}</p>;
  } else {
    return <p>loading...</p>;
  }
}

export default DataFetcher;
