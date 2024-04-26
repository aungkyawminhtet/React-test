import List from "./List";

const Listgp = () => {
  const data = [
    { id: 1, name: "John", age: 30, city: 4 },
    { id: 2, name: "Alice", age: 25, city: 0 },
    { id: 3, name: "Bob", age: 35, city: 1 },
    { id: 4, name: "Emily", age: 28, city: 6 },
    { id: 5, name: "Michael", age: 40, city: 0 },
  ];
  return (
    <div className=" space-y-2">
      {data.map((list) => (
        <List key={list.id} name={list.name} age={list.age} city={list.city} />
      ))}
    </div>
  );
};

export default Listgp;
