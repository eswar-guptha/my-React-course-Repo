import { useState } from "react";

export default function DateCounter1() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);
  let date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <h3>Date Counter 1</h3>
      <div>
        <button onClick={() => setStep((curStep) => curStep - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((curStep) => curStep + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((curCount) => curCount - step)}>
          -
        </button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((curCount) => curCount + step)}>
          +
        </button>
        <p>
          {count === 0
            ? "Today is "
            : count < 0
            ? `${count} days back it was `
            : `${count} days form today it will be `}
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
