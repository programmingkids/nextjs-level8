export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work03</h1>
      <div className="py-4 px-6">
        <div className="flex bg-slate-500 p-5 mb-4">
          <div className="basis-1/2 bg-orange-500 text-white p-4">オレンジ</div>
          <div className="basis-1/4 bg-purple-500 text-white p-4">グレープ</div>
          <div className="basis-1/4 bg-pink-500 text-white p-4">ピーチ</div>
        </div>
        <div className="flex bg-slate-500 p-5 mb-4">
          <div className="basis-1/3 bg-orange-500 text-white p-4">オレンジ</div>
          <div className="basis-1/3 bg-purple-500 text-white p-4">グレープ</div>
          <div className="basis-1/3 bg-pink-500 text-white p-4">ピーチ</div>
        </div>
        <div className="flex bg-slate-500 p-5 mb-4">
          <div className="basis-1/4 bg-orange-500 text-white p-4">オレンジ</div>
          <div className="basis-1/2 bg-purple-500 text-white p-4">グレープ</div>
          <div className="basis-1/4 bg-pink-500 text-white p-4">ピーチ</div>
        </div>
      </div>
    </div>
  );
}
