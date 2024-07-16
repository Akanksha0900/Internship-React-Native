import { useState } from "react";
import "./App.css";

import React from "react";

function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [result, setresult] = useState(0);

  function handleChange1(event) {
    setnum1(parseInt(event.target.value));
  }
  function handleChange2(event) {
    setnum2(parseInt(event.target.value));
  }

  function add(event) {
    setresult(num1 + num2);
  }

  function subtract(event) {
    setresult(num1 - num2);
  }

  function product(event) {
    setresult(num1 * num2);
  }

  function division(event) {
    setresult(num1 / num2);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter first number"
          onChange={handleChange1}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter second number"
          onChange={handleChange2}
        ></input>
      </div>
      <div>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={product}>*</button>
        <button onClick={division}>/</button>
      </div>
      <p>{result}</p>
    </div>
  );
}

export default App;
