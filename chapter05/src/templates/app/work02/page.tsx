export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work02</h1>
      <div className="py-4 px-6">
        <div className="flex flex-row bg-slate-500 p-5 mb-4">
          <div className="bg-orange-500 text-white p-4">オレンジ</div>
          <div className="bg-purple-500 text-white p-4">グレープ</div>
          <div className="bg-pink-500 text-white p-4">ピーチ</div>
        </div>
        <div className="flex flex-row-reverse bg-slate-500 p-5 mb-4">
          <div className="bg-orange-500 text-white p-4">オレンジ</div>
          <div className="bg-purple-500 text-white p-4">グレープ</div>
          <div className="bg-pink-500 text-white p-4">ピーチ</div>
        </div>
        <div className="flex flex-col bg-slate-500 p-5 mb-4">
          <div className="bg-orange-500 text-white p-4">オレンジ</div>
          <div className="bg-purple-500 text-white p-4">グレープ</div>
          <div className="bg-pink-500 text-white p-4">ピーチ</div>
        </div>
        <div className="flex flex-col-reverse bg-slate-500 p-5 mb-4">
          <div className="bg-orange-500 text-white p-4">オレンジ</div>
          <div className="bg-purple-500 text-white p-4">グレープ</div>
          <div className="bg-pink-500 text-white p-4">ピーチ</div>
        </div>
      </div>
    </div>
  );
}
