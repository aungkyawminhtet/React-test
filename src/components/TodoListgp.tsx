import React from "react";
import TodoList from "./TodoList";


interface todoListgp {
  todo: {
    item: String;
    id: number;
  }[];
}

const TodoListgp: React.FC<todoListgp> = ({ todo }) => {
  return (
    <div>
      {todo.map(({id, item}) => (
        <TodoList key={id} item={item} id = {id} />
      ))}
    </div>
  );
};

export default TodoListgp;
