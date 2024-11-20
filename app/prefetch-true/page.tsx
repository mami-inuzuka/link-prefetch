import Link from "next/link";

export default function PrefetchTrue() {
  return (
    <>
      <Link href="/prefetch-true/todos/1" prefetch>
        todo:1
      </Link>
    </>
  );
}
