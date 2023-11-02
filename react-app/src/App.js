import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Show from "./Show";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world! this is {count} </h1>
      <Counter setCount={setCount} /> {/* <Counter data={(setCount,x)} /> */}
      {/* <Counter {...val} /> */}
      <Show data={count} />
    </div>
  );
}
export default App;
