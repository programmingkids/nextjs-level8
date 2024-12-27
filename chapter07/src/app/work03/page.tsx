import { MdPerson } from 'react-icons/md';
import { MdHome } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { MdThumbUp } from 'react-icons/md';

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work03</h1>
      <div className="py-4 px-6">
        <div className="grid grid-cols-4 gap-5 justify-items-center mb-4">
          <MdPerson />
          <MdHome />
          <MdEdit />
          <MdThumbUp />
          <MdPerson className="text-red-500" />
          <MdHome className="text-blue-500" />
          <MdEdit className="text-purple-500" />
          <MdThumbUp className="text-orange-500" />
          <MdPerson className="text-red-500 text-lg" />
          <MdHome className="text-blue-500 text-xl" />
          <MdEdit className="text-purple-500 text-2xl" />
          <MdThumbUp className="text-orange-500 text-3xl" />
        </div>
      </div>
    </div>
  );
}
