import { STRING_CONSTANT } from '../utils/constants';
export const Headers = () => {
  return (
    <div className="flex h-12 w-full text-sky-500">
      <div className="text-3xl self-center text-gray-700"> {STRING_CONSTANT.title}</div>
      <div className="mx-4 border-r border-slate-800" />
      <div className=" flex self-center text-gray-500"> {STRING_CONSTANT.subtitle} </div>
    </div>
  );
};
