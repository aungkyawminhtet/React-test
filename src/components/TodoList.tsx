import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";

interface ToDdoProps {
  id: number;
  item: String;
  ischeck: boolean;
  delList: (id: number) => void;
  setTodo: any;
  todo: any;
  input: String | any;
  setInput: any;
  setIsEdit: any;
  setEditId: any
}

const TodoList: React.FC<ToDdoProps> = ({
  id,
  item,
  ischeck,
  delList,
  setTodo,
  todo,
  input,
  setInput,
  setIsEdit,
  setEditId
}) => {

  const [isChecking, setIsChecking] = useState(false);

  const updateList = (id: number) => {
    if(!isChecking) {
      todo.map((el:any) => el.id === id ? (
        setInput(el.item),
        setEditId(el.id),
        setIsEdit(true)
      ) : (el))
    }
  };


  const handleCheck = (id: number) => { 
    setTodo(
      todo.map((el: any) =>
        el.id === id ? { ...el, ischeck: isChecking } : el
      )
    );
  };


  useEffect(() => {
    handleCheck(id);
  }, [isChecking]);


  const handleChange = () => {
    setIsChecking(!isChecking);
  };
 

  return (
    <div className=" w-full">
      <div className="flex justify-between p-2 border border-gray-700 hover:bg-gray-300 duration-200">
        <div className=" space-x-2 flex items-center">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={ischeck}
            className="w-5 h-5"
          />
          <label
            htmlFor="ak"
            className={`text-2xl font-serif font-bold ${
              ischeck ? "line-through" : ""
            }`}
          >
            {item}
          </label>
        </div>

        <div className="flex space-x-2">
          <svg
            onClick={() => updateList(id)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 text-blue-600 ${
              ischeck ? " opacity-50 disabled:cursor-pointer" : " opacity-100"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => delList(id)}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
