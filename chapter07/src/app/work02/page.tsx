import { FaRegCircleUser } from 'react-icons/fa6';
import { FaHouse } from 'react-icons/fa6';
import { FaPen } from 'react-icons/fa6';
import { FaThumbsUp } from 'react-icons/fa6';

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work02</h1>
      <div className="py-4 px-6">
        <div className="grid grid-cols-4 gap-5 justify-items-center	mb-4">
          <FaRegCircleUser />
          <FaHouse />
          <FaPen />
          <FaThumbsUp />
          <FaRegCircleUser className="text-red-500" />
          <FaHouse className="text-blue-500" />
          <FaPen className="text-purple-500" />
          <FaThumbsUp className="text-orange-500" />
          <FaRegCircleUser className="text-red-500 text-lg" />
          <FaHouse className="text-blue-500 text-xl" />
          <FaPen className="text-purple-500 text-2xl" />
          <FaThumbsUp className="text-orange-500 text-3xl" />
        </div>
      </div>
    </div>
  );
}
