import { BsPersonCircle } from 'react-icons/bs';
import { BsFillHouseFill } from 'react-icons/bs';
import { BsPencilFill } from 'react-icons/bs';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work01</h1>
      <div className="py-4 px-6">
        <div className="grid grid-cols-4 gap-5 justify-items-center mb-4">
          <BsPersonCircle />
          <BsFillHouseFill />
          <BsPencilFill />
          <BsFillHandThumbsUpFill />
          <BsPersonCircle className="text-red-500" />
          <BsFillHouseFill className="text-blue-500" />
          <BsPencilFill className="text-purple-500" />
          <BsFillHandThumbsUpFill className="text-orange-500" />
          <BsPersonCircle className="text-red-500 text-lg" />
          <BsFillHouseFill className="text-blue-500 text-xl" />
          <BsPencilFill className="text-purple-500 text-2xl" />
          <BsFillHandThumbsUpFill className="text-orange-500 text-3xl" />
        </div>
      </div>
    </div>
  );
}
