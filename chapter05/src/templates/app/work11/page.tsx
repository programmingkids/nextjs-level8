export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work11</h1>
      <div className="py-4 px-6">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-pink-500 p-2 text-white">01</div>
          <div className="col-span-2 bg-pink-500 p-2 text-white">02</div>
          <div className="bg-pink-500 p-2 text-white">03</div>
          <div className="col-span-3 bg-pink-500 p-2 text-white">04</div>
          <div className="bg-pink-500 p-2 text-white">05</div>
          <div className="bg-pink-500 p-2 text-white">06</div>
          <div className="col-start-3 col-span-2 bg-pink-500 p-2 text-white">
            07
          </div>
        </div>
      </div>
    </div>
  );
}
