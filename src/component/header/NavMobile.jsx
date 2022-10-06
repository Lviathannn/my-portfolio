import React from "react";
import { Link } from "react-scroll";
import { HouseDoor } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { Motherboard } from "react-bootstrap-icons";
import { Laptop } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";

export default function NavMobile() {
   return (
      <nav className="nav__mobile bg-slate-200/40 backdrop-blur-md w-4/5 h-16 fixed bottom-6 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl  flex justify-evenly my-auto items-center lg:hidden text-lg z-[100] dark:bg-slate-900/50 dark:text-slate-50">
         <Link
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
