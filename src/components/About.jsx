import React from "react";
import { CloudDownload } from "react-bootstrap-icons";

export default function About() {
   return (
      <section className="relative" id="about">
         <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-48 md:gap-5 md:mt-5">
            <div className="about__image bg-indigo-500 lg:w-[450px] w-72 rounded-xl overflow-hidden">
               <img src="/img/profile2.png" alt="Profile2" />
            </div>
            <div className="about__caption text-slate-700  mt-10 text-center md:text-left">
               <h1 className="font-bold text-4xl lg:text-5xl dark:text-slate-50">
                  About <span className="text-indigo-500">Me</span>
               </h1>
               <p className="text- text-slate-500 w-96 mt-5 dark:text-slate-50">
                  My name is Muhammad Asrul Rifa Anwar , and I have a passion in
                  web programming, especially Front-End, I like to improve my
                  skills by learning every day, I have experience in creating
                  UI, Functionality of a web, Clone websites, and making landing
                  pages
               </p>
               <a
                  href="src/img/myCV.png"
                  download="Muhammad-Asrul-CV.png"
                  className="flex justify-center items-center gap-2 bg-indigo-500 w-40 py-2 text-center rounded-xl text-white mx-auto mt-5 md:mx-0 hover:bg-indigo-600 active:bg-indigo-800"
               >
                  <CloudDownload></CloudDownload> Download CV
               </a>
            </div>
         </div>
      </section>
   );
}
