import SearchBar from "./SearchBar";
import { NavLink, useLocation } from "react-router";
import { BiSearch } from "react-icons/bi";
import { TiWiFi } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoSignIn } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = useLocation().pathname;

  const links = [
    { name: "الرئيسية", path: "/" },
    { name: "المتجر", path: "/shop" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      {/* Offer Section */}
      <div className="container py-2 flex justify-between items-center relative">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center text-white bg-linear-to-bl from-(--main-color) to-(--gr-color) h-9 w-9 rounded-2xl shadow-lg shadow-(--main-color)">
            <TiWiFi className="text-lg" />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-xl text-slate-800 tracking-widest grow">
              سوداتل
            </h1>
            <p className="text-xs font-bold text-(--text-color) leading-tight">
              للاتصالات
            </p>
          </div>
        </div>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <div className="flex flex-col items-center gap-1" key={link.name}>
              <NavLink
                key={link.name}
                to={link.path}
                className={`${path === link.path ? "text-(--main-color)" : "text-(--text-color)"}
                 hover:text-(--main-color) transition-colors duration-300 focus:outline-none`}
              >
                {link.name}
              </NavLink>
              {path === link.path && (
                <span className="w-full h-0.5 bg-linear-to-bl from-(--main-color) to-(--gr-color)"></span>
              )}
            </div>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {/* Mobile menu toggle (visible on small screens) */}
          <button
            className="md:hidden text-(--text-color) hover:text-(--hover-color) transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="فتح القائمة"
          >
            {mobileOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
          <div className="relative">
            <LuShoppingCart className="text-2xl text-(--text-color) hover:text-(--hover-color) transition-colors duration-300 cursor-pointer" />
            <span className="absolute -top-3 -right-3 bg-(--gr-color) text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
          <BiSearch
            className="text-2xl text-(--text-color) hover:text-(--hover-color) transition-colors duration-300 cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          <button className="hidden md:flex items-center justify-center py-2 px-4 gap-1 text-white bg-linear-to-bl from-(--main-color) to-(--gr-color) rounded-xl transition-colors duration-300">
            <span className="hidden md:inline">تسجيل الدخول</span>
            <GoSignIn className="text-xl" />
          </button>
        </div>
      </div>
      {open && (
        <>
          <div className="w-full h-px bg-slate-200"></div>
          <div className="container py-">
            <SearchBar />
          </div>
        </>
      )}

      {/* Mobile dropdown links */}
      {mobileOpen && (
        <div className="md:hidden w-full">
          <div className="w-full h-px bg-slate-200"></div>
          <div className="container py-3">
            <ul className="flex flex-col space-y-2 mb-4">
              {links.map((link) => (
                <div className="flex flex-col items-start" key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={` ${path === link.path ? "text-(--main-color)" : "text-(--text-color)"} hover:text-(--main-color) transition-colors duration-300`}
                  >
                    {link.name}
                  </NavLink>
                  {path === link.path && (
                    <span className="w-full h-0.5 bg-linear-to-bl from-(--main-color) to-(--gr-color) mt-1"></span>
                  )}
                </div>
              ))}
            </ul>
            <button className="main-btn">
              <span className="">تسجيل الدخول</span>
              <GoSignIn className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
