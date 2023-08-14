import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion" data={data}>
      {data.map((ele, i) => (
        <AccordionItem
          title={ele.title}
          text={ele.text}
          num={i + 1}
          id={i + 1}
          key={i + 1}
        ></AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, text, num, id }) {
  let [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((cur) => !cur);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""} `} onClick={handleOpen}>
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}
