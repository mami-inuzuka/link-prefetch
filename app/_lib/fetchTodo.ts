export const fetchTodo = async (id: string) => {
  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  ).then((response) => response.json());
  return todo;
};
