import { useEffect, useState } from "react";
//useEffect example
const Hook = () => {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(10);
  const handleIncreament = () => {
    setCount((prev) => prev + 1);
  };

  const handleX = () => {
    setX((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("i will run");
  }, [x]); //shouldComponentUpdate()

  //usememo,usecallback is performance optimization in react
  //usecallback--will give the memorised value of a function
  return (
    <div>
      {count}
      <button onClick={handleIncreament}>increament</button>
      {x}
      <button onClick={handleX}>Click</button>
    </div>
  );
};

export default Hook;
