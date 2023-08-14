import { useState } from "react";

export default function AccordionV1({ data }) {
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
