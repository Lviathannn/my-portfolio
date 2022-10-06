import React from "react";
import { Link } from "react-scroll";
import { Send } from "react-bootstrap-icons";
import { ArrowDownCircleFill } from "react-bootstrap-icons";

export default function Caption() {
   return (
      <div className="h-screen flex flex-col lg:flex-row-reverse justify-center items-center lg:gap-48 md:gap-5 relative z-50">
         <div className="home__image bg-indigo-500 blob overflow-hidden w-96 h-96 opacity-100">
            <img src="/img/profile.png" alt="Profile" className="-mb-10 mt-5" />
         </div>
         <div className="home__caption text-slate-700  mt-10 md:mt-0 text-center md:text-left">
            <h1 className="font-bold text-4xl lg:text-5xl dark:text-slate-50">
               Hi! I'm <span className="text-indigo-500">Asrul</span>
            </h1>
            <h6 className="text-lg text-slate-600 font-normal mt-1 dark:text-slate-400">
               Front-End Developer
            </h6>
            <p className="text-base text-slate-500 w-80 dark:text-slate-50">
               A profesional front end developer , Love to Add clarity to
               complicated concepts by design
            </p>
            <a
               href="mailto:muhammad.asrul.rifa@gmail.com"
               target="_blank"
               rel="noreferrer"
               className=" bg-indigo-500 py-2 w-40 rounded-xl text-white mx-auto mt-5 md:mx-0 hover:bg-indigo-600 active:bg-indigo-800 text-center cursor-pointer flex justify-center items-center gap-2"
            >
               <Send></Send> <p>Contact Me</p>
            </a>
         </div>
         <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="about"
            className="home__icon absolute w-14 h-14 text-5xl bottom-5 rounded-full mt-5 hidden lg:flex justify-center items-center text-indigo-500 animate-bouncefast z-0 hover:text-indigo-700 cursor-pointer"
         >
            <ArrowDownCircleFill></ArrowDownCircleFill>
         </Link>
      </div>
   );
}
