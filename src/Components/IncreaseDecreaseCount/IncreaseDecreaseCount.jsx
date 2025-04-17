import React, { useState } from "react";
import './IncreaseDecreaseCount.css'

const IncreaseDecreaseCount = () => {
  const [count, setCount] = useState(0);

  const incerement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="bottom">
        <h3>Counter: {count} </h3>
        <button className="btn1" onClick={incerement}>
          ➕ Increment
        </button>
        <button className="btn1" onClick={decrement}>
          ➖ Decrement
        </button>
        <button className="btn1" onClick={reset}>
          🔁 Reset
        </button>
      </div>
    </>
  );
};

export default IncreaseDecreaseCount;
