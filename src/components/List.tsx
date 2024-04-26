
interface ListProps {
  name: String,
  age: number,
  city: number,
}

const List = ({ name, age, city }: ListProps) => {
  return (
    <div className={`flex ${city === 0 ? "border-s-4 border-red-500" : "border-s-4 border-blue-500"} bg-white p-1 select-none cursor-pointer hover:bg-slate-400 duration-300`}>
      <h1>Name : {name}. Age : {age}. City : {city}.</h1> 
    </div>
  );
};

export default List;
