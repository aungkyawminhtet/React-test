import React from "react";
import TodoList from "./TodoList";

interface todoListgp {
  todo: {
    item: String;
    id: number;
    ischeck: boolean;
  }[];
  setTodo: any;
}

const TodoListgp: React.FC<todoListgp> = ({ todo, setTodo }) => {
  
    const handleCheck = (id: number) => {
    console.log("handle check is working");
    console.log("id is ", id);

    setTodo(
      todo.map((el: any) =>
        el.id === id ? { ...el, ischeck: true } : el
      )
    );

    console.log(todo);
  };

  const delList = (id: number) => {
    setTodo(
        todo.filter(((el) => el.id != id))
    )
  }

  return (
    <div>
      {todo.map(({ id, item, ischeck }) => (
        <TodoList
          key={id}
          item={item}
          id={id}
          ischeck={ischeck}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
};

export default TodoListgp;
