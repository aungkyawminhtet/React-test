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
import Test from "./components/Test";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  // console.log("edit id is ", editId);

  return (
    <div className="flex bg-orange-50 h-screen">
      <div className=" w-[400px] mx-auto mt-20">
        {/* <Test /> */}
        <Header />
        <Todoinput isEdit={isEdit} setTodo={setTodo} todo={todo} input={input} setInput={setInput} editId={editId} />
        <Status todo={todo} />
        <TodoListgp todo={todo} setIsEdit={setIsEdit} setTodo={setTodo} input={input} setInput={setInput} setEditId={setEditId} />
        {/* <Listgp /> */}
        {/* <Accordiongp /> */}
        {/* <Accordion /> */}
        {/* <Counter /> */}
        {/* <Input /> */}
      </div>
    </div>
  );
}

export default App;
