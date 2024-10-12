import { useEffect, useState } from "react";

function DataFetcherWithDependecy(props) {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${props.type}/1`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      });
  }, [props.type]);

  if (apiData) {
    return <p>{apiData.title}</p>;
  } else {
    return null;
  }
}

export default DataFetcherWithDependecy;
