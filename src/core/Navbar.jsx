import { Button } from "../core";
import { useState } from "react";
import { HamburgerIcon, NavItems } from "../components";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="bg-primary fixed w-full lg:top-8 z-50 lg:py-2">
      <div className="container flex justify-between items-center relative z-50 bg-primary">
        <a href="#" className="">
          <img src="/Logo.png" alt="Logo" />
        </a>
        <HamburgerIcon onClick={handleHamburgerClick} open={open} />
        <NavItems />

        <div className="flex items-center gap-9">
          <a href="#" className="font-dm font-medium text-lg text-white">
            Login
          </a>
          <Button title="register" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
