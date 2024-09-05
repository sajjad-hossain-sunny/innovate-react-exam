import { IoIosArrowDown } from "react-icons/io";

const NavItems = () => {
  return (
    <div className="font-dm font-medium text-lg text-white flex flex-col lg:flex-row lg:gap-12 pl-5 pt-3 lg:p-0 gap-y-1.5">
      <div className="relative group">
        <span className="flex items-center cursor-pointer">
          Home <IoIosArrowDown className="mt-0.5 ml-2" />
        </span>
        <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black py-1.5 rounded-md w-max gap-4 z-10">
          <a href="#" className="block px-4 hover:bg-slate-300">
            Home 1
          </a>
          <a href="#" className="block px-4 hover:bg-slate-300">
            Home 2
          </a>
        </div>
      </div>
      <a href="#" className="">
        Features
      </a>
      <div className="relative group">
        <span className="flex items-center cursor-pointer">
          Service <IoIosArrowDown className="mt-0.5 ml-2" />
        </span>
        <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black py-1.5 rounded-md w-max gap-4 z-10">
          <a href="#" className="block px-4 hover:bg-slate-300">
            Service 1
          </a>
          <a href="#" className="block px-4 hover:bg-slate-300">
            Service 2
          </a>
        </div>
      </div>
      <div className="relative group">
        <span className="flex items-center cursor-pointer">
          Pages <IoIosArrowDown className="mt-0.5 ml-2" />
        </span>
        <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:block bg-white text-black py-1.5 rounded-md w-max gap-4 z-10">
          <a href="#" className="block px-4 hover:bg-slate-300">
            Pages 1
          </a>
          <a href="#" className="block px-4 hover:bg-slate-300">
            Pages 2
          </a>
        </div>
      </div>
      <a href="#" className="">
        Blog
      </a>
    </div>
  );
};

export default NavItems;
