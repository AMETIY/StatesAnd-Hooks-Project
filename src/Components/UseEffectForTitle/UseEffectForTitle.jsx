import React, { useEffect, useState } from "react";
import styles from "./UseEffectForTitle.module.css";

const UseEffectForTitle = () => {
  const [counter, setCounter] = useState(0);
  const color = counter % 2 === 0 ? "white" : "#209FF1";
  
  const changeCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    document.title = `Count: (${counter})`;
    document.body.style.backgroundColor = color;
  }, [counter]);

  useEffect(() => {
    alert("Component is Mounted 🪴");
  }, []);

  return (
    <>
      <div className={styles.sideEffect}>
        <button className={styles.btn2} onClick={changeCounter}>
          You Better Click Me
        </button>
        <h3 className={styles.h3}>{counter} </h3>
      </div>
    </>
  );
};

export default UseEffectForTitle;
