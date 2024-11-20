import Link from "next/link";

export default function PrefetchNull() {
  return (
    <>
      <Link href="/prefetch-null/todos/1" prefetch={null}>
        todo:1
      </Link>
      {/* <Link href="/prefetch-null/todos/2" prefetch={null}>
        todo:2
      </Link>
      <Link href="/prefetch-null/todos/3" prefetch={null}>
        todo:3
      </Link>
      <Link href="/prefetch-null/todos/4" prefetch={null}>
        todo:4
      </Link> */}
    </>
  );
}
