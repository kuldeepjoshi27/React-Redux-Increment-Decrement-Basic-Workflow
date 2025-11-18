import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);

  return (
    <div className="app-container">
      <div className="card">
        <h1>Count: {count}</h1>

        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>

        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
