import Link from "next/link";
import { fetchTodos } from "@/app/_lib/fetchTodos";

export default async function Todos() {
  console.log("🔸 Todos component started");

  const todos = await fetchTodos();

  console.log("🔸 Todos component rendering");

  return (
    <>
      {/* @ts-expect-error 一旦無視する */}
      {todos.map((todo) => (
        <Link key={todo.id} href={`/prefetch-true/todos/${todo.id}`} prefetch>
          {todo.title}
        </Link>
      ))}
    </>
  );
}
