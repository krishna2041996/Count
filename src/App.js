import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(() => {
    const intialData = localStorage.getItem("item");
    return intialData === null ? 0 : intialData;
  });

  const clickInc = () => {
    return count > 9 ? count : setCount(count + 1);
  };
  const clickDec = () => {
    return count < 1 ? count : setCount(count - 1);
  };

  useEffect(() => {
    localStorage.setItem("item", count);
  }, [count]);

  return (
    <center>
      <>
        <h1>{count}</h1>
        <button onClick={clickInc}>Increment</button>
        {"          "}
        <button onClick={clickDec}>Decrement</button>
      </>
    </center>
  );
};

export default App;

