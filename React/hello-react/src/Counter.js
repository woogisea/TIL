import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
    if (number <= 0) {
      setNumber(0);
    }
  };
  return (
    <>
      <h2>Counter</h2>
      <h2>{number}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}

export default Counter;
