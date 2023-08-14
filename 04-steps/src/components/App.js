import StepsV1 from "./StepsV1";

export const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <StepsV1 msg={messages}></StepsV1>
      {/* <StepsOne></StepsOne> */}
    </div>
  );
}
