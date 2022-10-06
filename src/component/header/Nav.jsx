import React from "react";
import { Link } from "react-scroll";

export default function Nav() {
   return (
      <nav className="h-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg sm:px-28  justify-center fixed top-0 min-w-full hidden lg:flex z-[100]">
         <div className="container my-auto hidden sm:block">
            <h1 className="text-lg font-semibold text-indigo-500 my-auto">
               Muhammad Asrul
            </h1>
         </div>
         <div className="nav__menu container flex justify-center sm:justify-end my-auto text-slate-500 dark:text-slate-50">
            <Link
               to="home"
               className="px-3 hover:text-indigo-600 cursor-pointer"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               Home
            </Link>
            <Link
               to="about"
               className="px-3 hover:text-indigo-600 cursor-pointer"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               About
            </Link>
            <Link
               to="skill"
               className="px-3 hover:text-indigo-600 cursor-pointer"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               Skill
            </Link>
            <Link
               to="portfolio"
               className="px-3 hover:text-indigo-600 cursor-pointer"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               Portfolio
            </Link>
            <Link
               to="contact"
               className="px-3 hover:text-indigo-600 cursor-pointer"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               Contact
            </Link>
         </div>
      </nav>
   );
}
