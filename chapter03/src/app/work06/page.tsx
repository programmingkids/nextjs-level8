export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work06</h1>
      <div className="py-4 px-6 text-left">
        <div className="border-2 border-red-500 border-solid p-2 mb-2">{"Apple, ".repeat(10)}</div>
        <div className="border-2 border-red-500 border-dashed p-2 mb-2">{"Apple, ".repeat(10)}</div>
        <div className="border-2 border-red-500 border-dotted p-2 mb-2">{"Apple, ".repeat(10)}</div>
        <div className="border-2 border-red-500 border-double p-2 mb-2">{"Apple, ".repeat(10)}</div>
        <div className="border-2 border-red-500 border-hidden p-2 mb-2">{"Apple, ".repeat(10)}</div>
        <div className="border-2 border-red-500 border-none p-2 mb-2">{"Apple, ".repeat(10)}</div>
      </div>
    </div>
  );
}
