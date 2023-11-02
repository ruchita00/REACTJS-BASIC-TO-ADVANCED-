import React, { useState, useMemo } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    // Perform expensive calculation using count
    return count * 2;
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
