import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
   Telephone,
   Laptop,
   Motherboard,
   HouseDoor,
   Person,
} from "react-bootstrap-icons";

export default function Nav() {
   const [screenSize, setScreenSize] = useState(window.innerWidth);
   const [activeNavbar, setActiveNavbar] = useState("");

   useEffect(() => {
      const handleResize = () => {
         setScreenSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   return screenSize >= 1024 ? (
      <nav className="h-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg sm:px-28  justify-center fixed top-0 min-w-full flex z-[100]">
         <div className="container my-auto hidden sm:block">
            <h1 className="text-lg font-semibold text-indigo-500 my-auto">
               Muhammad Asrul
            </h1>
         </div>
         <div className="nav__menu container flex justify-center sm:justify-end my-auto text-slate-500 dark:text-slate-50">
            <Link
               activeClass="px-3 text-indigo-600 cursor-pointer"
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
               activeClass="px-3 text-indigo-600 cursor-pointer"
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
               activeClass="px-3 text-indigo-600 cursor-pointer"
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
               activeClass="px-3 text-indigo-600 cursor-pointer"
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
               activeClass="px-3 text-indigo-600 cursor-pointer"
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
   ) : (
      <nav className="nav__mobile bg-slate-200/40 backdrop-blur-md w-4/5 h-16 fixed bottom-6 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl  flex justify-evenly my-auto items-center text-lg z-[100] dark:bg-slate-900/50 dark:text-slate-50">
         <Link
            activeClass="px-3 text-indigo-600 cursor-pointer"
            to="home"
            className="px-3 hover:text-indigo-600 cursor-pointer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <HouseDoor></HouseDoor>
         </Link>
         <Link
            activeClass="px-3 text-indigo-600 cursor-pointer"
            to="about"
            className="px-3 hover:text-indigo-600 cursor-pointer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <Person></Person>
         </Link>
         <Link
            activeClass="px-3 text-indigo-600 cursor-pointer"
            to="skill"
            className="px-3 hover:text-indigo-600 cursor-pointer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <Motherboard></Motherboard>
         </Link>
         <Link
            activeClass="px-3 text-indigo-600 cursor-pointer"
            to="portfolio"
            className="px-3 hover:text-indigo-600 cursor-pointer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <Laptop></Laptop>
         </Link>
         <Link
            activeClass="px-3 text-indigo-600 cursor-pointer"
            to="contact"
            className="px-3 hover:text-indigo-600 cursor-pointer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <Telephone></Telephone>
         </Link>
      </nav>
   );
}
