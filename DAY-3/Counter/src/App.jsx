import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //count ie variable and setcount is a call back function that helps to update the value of count
  //hooks allow fun components to have access to s
  //0 default value
  return (
    <>
      <h1>This is Akanksha's counter</h1>
      <div className="card">
        <button className="Count">{count}</button>
        <br />

        <button
          className="Increment"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>

        <button className="Reset" onClick={() => setCount((count) => 0)}>
          Reset
        </button>

        <button
          className="Decrement"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>

        <p>Designed by Akanksha</p>
      </div>
      <p className="read-the-docs">This is my first react assignment</p>
    </>
  );
}

export default App;
