import { IoIosArrowDown } from "react-icons/io";

const NavItems = () => {
  return (
    <div className="font-dm font-medium text-base lg:text-lg capitalize text-white flex flex-col lg:flex-row lg:gap-12 pl-5 pt-3 lg:p-0 gap-y-1.5">
      <div className="relative group py-1">
        <span className="flex items-center cursor-pointer group-hover:text-primary-100">
          Home <IoIosArrowDown className="mt-0.5 ml-2 -rotate-90 lg:rotate-0" />
        </span>
        <div className="w-44 absolute right-0 lg:left-1/2 -bottom-12 lg:-bottom-40 translate-x-64 lg:-translate-x-1/2 bg-slate-50 text-black py-2 gap-4 z-10 invisible opacity-0 ease-out duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-x-48 lg:group-hover:-translate-x-1/2 lg:group-hover:-bottom-20 text-center">
          <a href="#" className="block hover:bg-slate-300 py-0.5">
            Home 1
          </a>
          <a href="#" className="block hover:bg-slate-300 py-0.5">
            Home 2
          </a>
        </div>
      </div>
      <a href="#" className="py-1 hover:text-primary-100">
        Features
      </a>
      <div className="relative group py-1">
        <span className="flex items-center cursor-pointer group-hover:text-primary-100">
          service{" "}
          <IoIosArrowDown className="mt-0.5 ml-2 -rotate-90 lg:rotate-0" />
        </span>
        <div className="w-44 absolute right-0 lg:left-1/2 -bottom-12 lg:-bottom-40 translate-x-64 lg:-translate-x-1/2 bg-slate-50 text-black py-2 gap-4 z-10 invisible opacity-0 ease-out duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-x-48 lg:group-hover:-translate-x-1/2 lg:group-hover:-bottom-20 text-center">
          <a href="#" className="block hover:bg-slate-300 py-0.5">
            service 1
          </a>
          <a href="#" className="block hover:bg-slate-300 py-0.5">
            service 2
          </a>
        </div>
      </div>
      <div className="relative group py-1">
        <span className="flex items-center cursor-pointer group-hover:text-primary-100">
          pages{" "}
          <IoIosArrowDown className="mt-0.5 ml-2 -rotate-90 lg:rotate-0" />
        </span>
        <div className="w-44 absolute right-0 lg:left-1/2 -bottom-12 lg:-bottom-40 translate-x-64 lg:-translate-x-1/2 bg-slate-50 text-black py-2 gap-4 z-10 invisible opacity-0 ease-out duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-x-48 lg:group-hover:-translate-x-1/2 lg:group-hover:-bottom-20 text-center">
          <a href="#" className="block hover:bg-slate-300 py-0.5">
            pages 1
          </a>
          <a href="#" className="block hover:bg-slate-300 py-0.5">
            pages 2
          </a>
        </div>
      </div>
      <a href="#" className="py-1 hover:text-primary-100">
        blog
      </a>
    </div>
  );
};

export default NavItems;
