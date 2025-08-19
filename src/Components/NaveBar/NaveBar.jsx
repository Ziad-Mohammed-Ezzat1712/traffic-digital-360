import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Images/logo.png";
import { LanguageContext } from "../../Context/LanguageContext";

export default function NaveBar() {
  const { isArabic, toggleLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkClass = ({ isActive }) =>
    `block py-2 ${
      isActive ? "text-[#00000] font-bold underline" : "text-[#333333]"
    } hover:text-[#6B6B6B]`;

  const navLinks = [
    { ar: "الرئيسية", en: "Home", to: "/" },
    { ar: "خدماتنا", en: "Services", to: "/services" },
    // { ar: "أعمالنا", en: "Portfolio", to: "/portfolio" },
    { ar: "من نحن", en: "About", to: "/about" },
    { ar: "تواصل معنا", en: "Contact Us", to: "/conectus" },
  ];

  return (
    <header className="px-6" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl border-b-1 mx-auto flex justify-between items-center">

        {/* Right side - Logo */}
        <div className="flex items-center gap-2 order-1">
          <img src={logo} alt="Logo" className="p-0 w-32 h-32" />
        </div>

        {/* Center - Navigation links */}
        <nav
          className={`order-2 flex space-x-6 lg:space-x-8 ${
            menuOpen
              ? "flex flex-col absolute top-[64px] left-6 bg-[#F2F2F2] shadow-lg rounded-lg p-4 w-56 lg:static lg:flex-row lg:w-auto lg:bg-transparent lg:shadow-none lg:p-0"
              : "hidden lg:flex"
          }`}
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          {navLinks.map(({ ar, en, to }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {isArabic ? ar : en}
            </NavLink>
          ))}
        </nav>

        {/* Left side - Buttons */}
        <div className="flex items-center gap-4 order-3">

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="hidden md:inline border-2 text-black px-5 py-2 rounded-full hover:bg-[#2a2a2a] hover:text-white transition"
          >
            {isArabic ? "English" : "العربية"}
          </button>

          {/* Get Started Button */}
          <button className="hidden md:inline border-2 text-black  px-5 py-2 rounded-full hover:bg-[#454545] hover:text-white transition">
            {isArabic ? "ابدأ الآن" : "Get Started"}
          </button>

         

     
          <button
            className="lg:hidden text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
