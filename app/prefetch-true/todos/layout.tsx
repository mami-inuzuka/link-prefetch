export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("🔸 Todos Layout");
  return <div>{children}</div>;
}
