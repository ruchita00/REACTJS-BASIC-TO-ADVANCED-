import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Show from "./Show";
import Form from "./form/Form";
import Hook from "./compoents/Hook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1>Hello world! this is {count} </h1>
      <Counter setCount={setCount} /> <Counter data={(setCount,x)} /> */}
      {/* <Counter {...val} /> */}
      {/* <Show data={count} /> */}
      {/* <Form /> */}
      <Hook />
    </div>
  );
}
export default App;
