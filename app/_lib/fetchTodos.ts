export const fetchTodos = async () => {
  const todo = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json(),
  );
  return todo;
};
