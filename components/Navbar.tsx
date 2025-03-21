import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="w-screen fixed top-0 left-0 py-5 text-black bg-white/30 dark:bg-[#0a0a0a]/30 backdrop-blur-sm px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#" className='text-black dark:text-white font-bold text-2xl md:text-3xl cursor-pointer'>
          Shortix
        </a>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
