import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [isTrue, setIsTrue] = useState(false);
//   console.log(input);
  return (
    
    <div>
      <input
        type="text"
        className="border-2 border-gray-800 p-2 "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex items-center gap-3">
        <input
          checked={isTrue}
          onChange={() => setIsTrue(!isTrue)}
          type="checkbox"
          id="ak"
          className="w-10 h-10"
        />
        <label htmlFor="ak" className=" select-none">
          check box
        </label>
      </div>
    </div>
  );
};

export default Input;
