export default async function Todo({ params }: { params: { id: string } }) {
  console.log("🔹 Todo component started");

  console.log(params);

  return <>Todo{params.id}</>;
}
