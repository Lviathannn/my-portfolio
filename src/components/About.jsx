import React, { useMemo } from "react";
import { CloudDownload } from "react-bootstrap-icons";
import { useThemeContext } from "../context/ThemeContext";

export default function About() {
   const { color } = useThemeContext();

   const memoizedHoverColor = useMemo(
      () =>
         color == "indigo"
            ? "hover:bg-indigo-600"
            : color == "blue"
            ? "hover:bg-blue-600"
            : color == "red"
            ? "hover:bg-red-600"
            : color == "cyan"
            ? "hover:bg-cyan-600"
            : color == "emerald"
            ? "hover:bg-emerald-600"
            : "hover:bg-rose-600",
      [color]
   );

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

   return (
      <section className="relative" id="about">
         <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-48 md:gap-5 md:mt-5">
            <div
               className={`about__image bg-${color}-500 lg:w-[450px] w-72 rounded-xl overflow-hidden`}
            >
               <img src="/img/profile2.png" alt="Profile2" />
            </div>
            <div className="about__caption text-slate-700  mt-10 text-center md:text-left">
               <h1 className="font-bold text-4xl lg:text-5xl dark:text-slate-50">
                  About <span className={memoizedColor}>Me</span>
               </h1>
               <p className="text-slate-500 md:w-96 w-80 mt-5 dark:text-slate-50">
                  My name is Muhammad Asrul Rifa Anwar , and I have a passion in
                  web programming, especially Front-End, I like to improve my
                  skills by learning every day, I have experience in creating
                  UI, Functionality of a web, Clone websites, and making landing
                  pages
               </p>
               <a
                  href="src/img/myCV.png"
                  download="Muhammad-Asrul-CV.png"
                  className={`flex justify-center items-center gap-2 bg-${color}-500 w-40 py-2 text-center rounded-xl text-white mx-auto mt-5 md:mx-0 ${memoizedHoverColor}`}
               >
                  <CloudDownload></CloudDownload> Download CV
               </a>
            </div>
         </div>
      </section>
   );
}
