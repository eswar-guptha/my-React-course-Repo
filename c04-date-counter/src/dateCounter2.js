import { useState } from "react";

export default function DateCounter2() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);
  let [changed, setChanged] = useState(false);

  function handleReset() {
    setCount(0);
    setStep(1);
    setChanged(false);
  }

  let date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <h3>Date Counter2</h3>
      <div>
        <input
          type="range"
          value={step}
          min={1}
          max={10}
          onChange={(e) => {
            setStep(Number(e.target.value));
            setChanged(true);
          }}
        ></input>
        <span>{step}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((curCount) => curCount - step);
            setChanged(true);
          }}
        >
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
            setChanged(true);
          }}
        ></input>
        <button
          onClick={() => {
            setCount((curCount) => Number(curCount) + step);
            setChanged(true);
          }}
        >
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

      {changed && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
