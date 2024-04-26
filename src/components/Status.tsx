import React from "react";

interface statusProps{
  todo: {
    id: number;
    item: String;
    ischeck: boolean
  }[]
}

const Status:React.FC<statusProps> = ({todo}) => {
  const count = todo.length;
  // console.log("lenght is ", count);
  return (
    <div className="flex justify-between items-center w-full mb-5">
      <h1 className=" font-bold font-serif text-2xl">Your Lists</h1>
      <div className=" px-6 py-2 bg-slate-900 text-white rounded-full">
        Done (<span>{count}</span>/<span>0</span>)
      </div>
    </div>
  );
};

export default Status;
