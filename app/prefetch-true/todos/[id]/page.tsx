import { fetchTodo } from "@/app/_lib/fetchTodo";

export default async function Todo({ params }: { params: { id: string } }) {
  console.log(`🔹Todo Page: start`);
  const todo = await fetchTodo(params.id);
  console.log(`🔹Todo Page: fetched [id:${todo.id} title: ${todo.title}]`);

  return <>Todo{params.id}</>;
}
