export const fetchTodo = async (id: string) => {
  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  ).then((response) => response.json());
  console.log("todo.id:", todo.id);
  return todo;
};
