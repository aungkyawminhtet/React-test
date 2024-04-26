import React, { ChangeEvent, useState } from "react";

interface TodoinputProps {
  setTodo: any;
  todo: any;
}

const Todoinput: React.FC<TodoinputProps> = ({ setTodo, todo }) => {
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  let id = Date.now();
  let newData = {
    id: id,
    item: input,
  };

  const handleAdd = () => {
    setTodo([...todo, newData ]);
    setInput("");
  };

  const keyhandle = (e:any) => {
    if(e.key == 'Enter') {
      setTodo([...todo, newData]);
      setInput("");
    }

    // setInput("");
  }

  return (
    <div className="mt-10 w-full mb-6">
      <div className="flex h-50">
        <input
          onKeyDown={keyhandle}
          value={input}
          onChange={handleInput}
          type="text"
          className="border text-xl w-[360px] border-gray-800 p-1"
        />
        <svg
          onClick={handleAdd}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white bg-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
};

export default Todoinput;
