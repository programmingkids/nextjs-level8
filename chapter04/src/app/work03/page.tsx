export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work03</h1>
      <div className="py-4 px-6">
        <table className="border-collapse border border-black w-full">
          <thead>
            <tr>
              <th className="border border-black">国名</th>
              <th className="border border-black">首都</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black">日本</td>
              <td className="border border-black">東京</td>
            </tr>
            <tr>
              <td className="border border-black">フランス</td>
              <td className="border border-black">パリ</td>
            </tr>
            <tr>
              <td className="border border-black">スペイン</td>
              <td className="border border-black">マドリード</td>
            </tr>
            <tr>
              <td className="border border-black">イタリア</td>
              <td className="border border-black">ローマ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
