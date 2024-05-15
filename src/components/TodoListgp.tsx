import React, { useState } from "react";
import TodoList from "./TodoList";
import logo from "../assets/logo.jpg";

interface todoListgp {
  todo: {
    item: String;
    id: number;
    ischeck: boolean;
  }[];
  setTodo: any;
  input: String | any;
  setInput: any;
  setIsEdit: any;
  setEditId: any
}

const TodoListgp: React.FC<todoListgp> = ({ todo, setTodo, input, setInput, setIsEdit, setEditId }) => {
  const delList = (id: number) => {
    setTodo(todo.filter((el) => el.id != id));
  };

  const listcount = todo.length;
  // console.log("list count in gp", listcount);

  return (
    <div>
      {todo.map(({ id, item, ischeck }) => (
        <TodoList
          key={id}
          item={item}
          id={id}
          ischeck={ischeck}
          delList={delList}
          setTodo={setTodo}
          todo={todo}
          input={input}
          setInput={setInput}
          setIsEdit={setIsEdit}
          setEditId={setEditId} 
        />
      ))}
      {listcount === 0 && (
        <div>
          <img src={logo} alt="not text image" className="" />
        </div>
      )}
    </div>
  );
};

export default TodoListgp;
