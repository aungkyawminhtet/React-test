import { useState } from "react";
import Accordion from "./Accordion";

const Accordiongp = () => {
  const [open, setOpen] = useState([
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a high-level, interpreted programming language that is used to make web pages interactive. It can be used to create dynamic web content, build web applications, and more.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How do I declare a variable in JavaScript?",
      answer:
        "You can declare a variable in JavaScript using the 'var', 'let', or 'const' keywords, followed by the variable name. For example: 'var myVar;' or 'let myVar = 10;'.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is an array?",
      answer:
        "An array is a data structure that stores a collection of elements, which can be of any data type (e.g., numbers, strings, objects). Arrays in JavaScript are zero-indexed, meaning the first element is accessed with an index of 0.",
      isOpen: false,
    },
  ]);

  const handlerOpen = (id: number) => {
    setOpen(open.map((el) => el.id === id ? {...el, isOpen: true} : {...el, isOpen: false}));
  };

  return (
    <div>
      {open.map(({ id, question, answer, isOpen }) => (
        <Accordion key={id} id={id} question={question} answser={answer} handlerOpen={handlerOpen} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default Accordiongp;
