interface AccordionProps {
  question: String;
  id: number;
  answser: String;
  handlerOpen:(id: number) => void;
  isOpen: boolean;
} 


const Accordion:React.FC<AccordionProps> = ({question, id, answser, handlerOpen, isOpen}) => {

  return (
    <div className="border border-gray-400">
      <div
        onClick={() => handlerOpen(id)}
        className="flex justify-between px-3 py-2 bg-blue-200"
      >
        <span className="select-none cursor-pointer">{question}</span>
        <span className={`${isOpen ? " rotate-180 duration-200 transition " : "rotate-0 duration-200 transition"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className=" p-1 text-gray-600 text-wrap animate__animated animate__bounceIn">
          <h1>{answser}</h1>
        </div>
      )}
    </div>
  );
};

export default Accordion;
