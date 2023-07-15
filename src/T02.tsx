import { useState } from "react";

function T02() {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);
  function handleClick() {
    // counter += 1;
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <>
      <div>{counter}</div>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default T02;
