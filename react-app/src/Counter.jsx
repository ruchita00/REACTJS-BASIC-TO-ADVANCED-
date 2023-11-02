import React from "react";

const Counter = ({ setCount }) => {
  const handleClick = () => {
    setCount((prev) => prev + 10);
  };
  return <button onClick={handleClick}>Click me</button>;
};

export default Counter;
