import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import {
   Telephone,
   Laptop,
   Motherboard,
   HouseDoor,
   Person,
} from "react-bootstrap-icons";
import { useThemeContext } from "../context/ThemeContext";

export default function Nav() {
   const [screenSize, setScreenSize] = useState(window.innerWidth);
   const { color } = useThemeContext();

   useEffect(() => {
      const handleResize = () => {
         setScreenSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const memoizedColor = useMemo(
      () =>
         color == "indigo"
            ? "text-indigo-500"
            : color == "blue"
            ? "text-blue-500"
            : color == "red"
            ? "text-red-500"
            : color == "cyan"
            ? "text-cyan-500"
            : color == "emerald"
            ? "text-emerald-500"
            : "text-rose-500",
      [color]
   );

   const memoizedHoverColor = useMemo(
      () =>
         color == "indigo"
            ? "hover:text-indigo-500"
            : color == "blue"
            ? "hover:text-blue-500"
            : color == "red"
            ? "hover:text-red-500"
            : color == "cyan"
            ? "hover:text-cyan-500"
            : color == "emerald"
            ? "hover:text-emerald-500"
            : "hover:text-rose-500",
      [color]
   );

   return screenSize >= 1024 ? (
      <nav className="fixed top-0 z-[100] flex h-14  min-w-full justify-center bg-white/50 backdrop-blur-lg dark:bg-slate-800/50 sm:px-28">
         <div className="container my-auto hidden sm:block">
            <h1 className={`text-base font-semibold ${memoizedColor} my-auto`}>
               Muhammad Asrul
            </h1>
         </div>
         <div className="nav__menu container my-auto flex justify-center text-slate-500 dark:text-slate-50 sm:justify-end">
            <Link
               activeClass={` ${memoizedColor}`}
               to="home"
               className={`cursor-pointer px-3 ${memoizedHoverColor}`}
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               Home
            </Link>
            <Link
               activeClass={` ${memoizedColor}`}
               to="about"
               className={`cursor-pointer px-3 ${memoizedHoverColor}`}
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               About
            </Link>
            <Link
               activeClass={` ${memoizedColor}`}
               to="skill"
               className={`cursor-pointer px-3 ${memoizedHoverColor}`}
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               Skill
            </Link>
            <Link
               activeClass={` ${memoizedColor}`}
               to="portfolio"
               className={`cursor-pointer px-3 ${memoizedHoverColor}`}
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
            >
               Portfolio
            </Link>
            <Link
               activeClass={` ${memoizedColor}`}
               to="contact"
               className={`cursor-pointer px-3 ${memoizedHoverColor}`}
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
      <nav className="nav__mobile fixed bottom-6 left-1/2 z-[100] my-auto flex h-16 w-4/5 -translate-y-1/2 -translate-x-1/2  items-center justify-evenly rounded-2xl bg-white/40 text-lg backdrop-blur-md dark:bg-slate-900/50 dark:text-slate-50">
         <Link
            activeClass={` ${memoizedColor}`}
            to="home"
            className={`cursor-pointer px-3 hover:${memoizedColor}`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <HouseDoor></HouseDoor>
         </Link>
         <Link
            activeClass={` ${memoizedColor}`}
            to="about"
            className={`cursor-pointer px-3 hover:${memoizedColor}`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <Person></Person>
         </Link>
         <Link
            activeClass={` ${memoizedColor}`}
            to="skill"
            className={`cursor-pointer px-3 hover:${memoizedColor}`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <Motherboard></Motherboard>
         </Link>
         <Link
            activeClass={` ${memoizedColor}`}
            to="portfolio"
            className={`cursor-pointer px-3 hover:${memoizedColor}`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
         >
            <Laptop></Laptop>
         </Link>
         <Link
            activeClass={` ${memoizedColor}`}
            to="contact"
            className={`cursor-pointer px-3 hover:${memoizedColor}`}
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
