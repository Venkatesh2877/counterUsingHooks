import { useState, useEffect } from "react";

// Use React Hooks for incrementing, decrementing nd resetting the value of the counter.
// Also, print the value of count on the console by using useEffect hook.

function Counter() {
  const [count, setCount] = useState(0);

  handlePlus = () => {
    setCount(count + 1);
  };
  handleMinus = () => {
    setCount(count - 1);
  };
  handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    console.log(count);
  });
  return (
    <>
      <p>Count value is:{count} </p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePlus}>Plus (+)</button>
      <button onClick={handleMinus}>Minus (-)</button>
    </>
  );
}

export default Counter;
