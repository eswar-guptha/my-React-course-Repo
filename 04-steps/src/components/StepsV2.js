import { useState } from "react";
// import { messages } from "./App";

export default function StepsV2({ msg }) {
  let [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(true);
  // let [test, setTest] = useState({
  //   name: "Eswar",
  // });
  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
    }
    // Bad  Pratice
    // test.name = "Guptha";
    // setTest({ name: "Guptha" });
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMsg step={step}>{msg[step - 1]}</StepMsg>

          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              clickFun={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" clickFun={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMsg({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

// Building reusable button instead of two buttons
// Children prop :-
function Button({ textColor, bgColor, clickFun, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={clickFun}
    >
      {children}
    </button>
  );
}
