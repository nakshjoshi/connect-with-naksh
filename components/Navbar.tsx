import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-background py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-end justify-between">

                    {/* Logo + Name */}
                    <div className="flex items-center gap-2">

            {/* Logo */}
            <img
                src="/logo.svg"
                alt="Logo"
                className="w-6 h-6"
            />

            <span className="text-white font-fira font-bold text-base">
                Nakshatra Joshi
            </span>

            </div>


        {/* Links */}
        <nav className="flex items-center gap-8 font-fira text-base">

          {/* Link */}
          <a href="#home" className="flex items-center gap-1 text-white">
            <span className="text-primary">#</span>home
          </a>

          <a
            href="#works"
            className="flex items-center gap-1 text-gray hover:text-white transition"
          >
            <span className="text-primary">#</span>works
          </a>

          <a
            href="#about"
            className="flex items-center gap-1 text-gray hover:text-white transition"
          >
            <span className="text-primary">#</span>about-me
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 text-gray hover:text-white transition"
          >
            <span className="text-primary">#</span>contacts
          </a>

          {/* Language */}
          <button className="flex items-center gap-1 text-gray hover:text-white transition">

            <span className="font-semibold">EN</span>

            {/* Arrow */}
            <div className="flex flex-col gap-[2px]">

              <span className="block w-2 h-[2px] bg-gray rotate-45"></span>
              <span className="block w-2 h-[2px] bg-gray -rotate-45"></span>

            </div>

          </button>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;
