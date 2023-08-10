import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);
  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((curStep) => curStep - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((curStep) => curStep + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((curCount) => curCount - step)}>
          -
        </button>
        <span>count : {count}</span>
        <button onClick={() => setCount((curCount) => curCount + step)}>
          +
        </button>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count < 0
              ? `${Math.abs(count)} days back it was `
              : `${count} days from today it is `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
