import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import ScrollReveal from "scrollreveal";
import { CaretRightFill } from "react-bootstrap-icons";
import { useThemeContext } from "../context/ThemeContext";

export default function Main() {
   const [activeTheme, setActiveTheme] = useState(false);
   const { setColor } = useThemeContext();

   useEffect(() => {
      const sr = ScrollReveal({
         origin: "top",
         distance: "60px",
         duration: 1500,
         delay: 150,
         reset: true,
      });
      sr.reveal(`
      .about__image, .skill__caption, .skill__tools, .skill__card, .contact__caption ,.footer__bio, .footer__info ,.footer__adress
      `);
      sr.reveal(`.home__image, .portfolio__caption, .contact__form`, {
         origin: `right`,
      });
      sr.reveal(
         `.home__caption, .portfolio__card, .contact__info , .footer__copy`,
         {
            origin: `left`,
         }
      );
      sr.reveal(".about__caption", { origin: "bottom" });
   }, []);

   return (
      <main className="overflow-x-hidden dark:bg-slate-800 bg-slate-50 dark:text-slate-50">
         <Home />
         <About />
         <Skill />
         <Portfolio />
         <Contact />
         <div
            className={`left-0 bottom-1/3 z-50 text-center fixed flex transition-all ${
               activeTheme == false ? "-left-20" : ""
            }`}
         >
            <div
               className={` bg-white/60 h-60 dark:bg-slate-700/60 backdrop-blur-md rounded-r-xl pt-5 w-20`}
            >
               <h1
                  className={`text-center mb-5 text-slate-600 font-medium dark:text-white`}
               >
                  Theme
               </h1>
               <div className={`flex gap-2 flex-wrap justify-center `}>
                  <button
                     className="w-6 h-6 bg-indigo-500 rounded-full"
                     onClick={() => {
                        setColor("indigo");
                     }}
                  ></button>
                  <button
                     className="w-6 h-6 bg-blue-500 rounded-full"
                     onClick={() => {
                        setColor("blue");
                     }}
                  ></button>
                  <button
                     className="w-6 h-6 bg-red-500 rounded-full"
                     onClick={() => {
                        setColor("red");
                     }}
                  ></button>
                  <button
                     className="w-6 h-6 bg-green-500 rounded-full"
                     onClick={() => {
                        setColor("green");
                     }}
                  ></button>
                  <button
                     className="w-6 h-6 bg-cyan-500 rounded-full"
                     onClick={() => {
                        setColor("cyan");
                     }}
                  ></button>
                  <button
                     className="w-6 h-6 bg-rose-500 rounded-full"
                     onClick={() => {
                        setColor("rose");
                     }}
                  ></button>
               </div>
               <div className={`flex justify-center`}>
                  <a href="https://github.com/Lviathannn" target="_blank">
                     <img
                        src="/img/github.png"
                        alt="github"
                        className={`w-10 mt-5 ${
                           activeTheme == false ? "w-0" : ""
                        }`}
                     />{" "}
                  </a>
               </div>
            </div>
            <div className="cursor-pointer rounded-r-full self-center">
               <button
                  className={`w-12 h-12 rounded-r-full bg-white flex justify-center items-center text-2xl text-slate-600 dark:text-white bg-white/60 h-60 dark:bg-slate-700/60 backdrop-blur-md `}
                  onClick={() => setActiveTheme(!activeTheme)}
               >
                  <CaretRightFill
                     className={`transition-all duration-[400ms] ${
                        activeTheme ? "rotate-180" : ""
                     }`}
                  />
               </button>
            </div>
         </div>
      </main>
   );
}
