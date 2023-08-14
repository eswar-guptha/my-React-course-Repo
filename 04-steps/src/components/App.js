import StepsV1 from "./StepsV1";
import StepsV2 from "./StepsV2";

export const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <StepsV1 msg={messages}></StepsV1>
      <StepsV2 msg={messages}></StepsV2>
    </div>
  );
}
