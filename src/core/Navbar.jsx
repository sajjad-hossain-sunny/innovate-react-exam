import { Button, HamburgerIcon, NavItems } from "../core";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="w-full fixed lg:py-2.5 lg:absolute lg:top-8 z-50">
      <div className="container hidden lg:flex justify-between items-center relative z-50">
        <a href="#" className="">
          <img src="/Logo.png" alt="Logo" />
        </a>
        <NavItems />
        <div className="flex items-center gap-9">
          <a
            href="#"
            className="font-dm font-medium text-base lg:text-lg text-white hover:text-primary-100 duration-300"
          >
            Login
          </a>
          <Button title="register" />
        </div>
      </div>

      <>
        <div className="container py-2 flex justify-between items-center lg:hidden relative z-[100] bg-primary-300">
          <a href="#" className="">
            <img src="/Logo.png" alt="Logo" />
          </a>
          <HamburgerIcon open={open} onClick={handleHamburgerClick} />
        </div>
        <div
          className={`flex lg:hidden w-full px-3.5 pb-3.5 flex-col items-start gap-9 bg-[#00000040] backdrop-blur-sm absolute z-40 duration-500 ease-in-out top-full  ${
            open
              ? "translate-y-0 visible opacity-100"
              : "-translate-y-full invisible opacity-0"
          }`}
        >
          <NavItems />
          <div className="flex items-center justify-end gap-9 w-full">
            <a
              href="#"
              className="font-dm font-medium text-base lg:text-lg text-white hover:text-primary-100 duration-300"
            >
              Login
            </a>
            <Button title="register" />
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
