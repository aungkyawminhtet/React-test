import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Accordiongp from "./components/Accordiongp";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Input from "./components/Input";
import Listgp from "./components/Listgp";
import Status from "./components/Status";
import Todoinput from "./components/Todoinput";
import TodoListgp from "./components/TodoListgp";

function App() {
  const [todo, setTodo] = useState([]);
  console.log(todo);

  return (
    <div className=" w-[400px] mx-auto mt-20">
      <Header />
      <Todoinput  setTodo={setTodo} todo={todo} />
      <Status todo = {todo} />
      <TodoListgp todo={todo} />
      {/* <Listgp /> */}
      {/* <Accordiongp /> */}
      {/* <Accordion /> */}
      {/* <Counter /> */}
      {/* <Input /> */}
    </div>
  );
}

export default App;
