import Link from "next/link";

export default function PrefetchNull() {
  return (
    <Link href="/prefetch-null/todos/1" prefetch={null}>
      todo:1
    </Link>
  );
}
