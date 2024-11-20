export const fetchTodos = async () => {
  console.log("fetch todos start");
  const todo = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json(),
  );
  console.log("fetch todos end");
  return todo;
};
