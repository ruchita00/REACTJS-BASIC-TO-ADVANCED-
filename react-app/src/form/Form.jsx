import { useState } from "react";
//if the input filed value is handled by it self called uncontrolled component

//controlled component=value of my input field will be control my react

const Form = () => {
  console.log("rerender");
  const [email, setEmail] = useState("ABC@gmail.com");
  const [count, setCount] = useState(0);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [student, setStudents] = useState([]);

  const handleIncrementChange = () => {
    setCount((prev) => prev + 1);
  };

  //setstate is asynchronous because it is not giving value immedialtly

  const handleStudent = () => {
    setStudents((prev) => [...prev, "A"]);
  };
  return (
    <>
      <form>
        <input
          type="email"
          name=""
          id=""
          value={email}
          onChange={handleEmail}
        />
        <input type="password" name="" id="" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleIncrementChange}>add 2</button>
      <h3>{count}</h3>
      <h5>{email}</h5>
      <button onClick={handleStudent}>Add student</button>
      {student.map((students) => (
        <h1>{students}</h1>
      ))}
    </>
  );
};
export default Form;
