import React from "react";

export default function Information() {
   return (
      <div className="footer__info flex flex-col gap-2">
         <h6 className="font-semibold text-slate-700 md:font-semibold md:text-xl dark:text-slate-50">
            Information
         </h6>
         <div className="flex flex-col text-sm text-slate-500 gap-2 md:text-base dark:text-slate-300">
            <a className="hover:text-indigo-500" href="#home">
               Home
            </a>
            <a className="hover:text-indigo-500" href="#about">
               About
            </a>
            <a className="hover:text-indigo-500" href="#skill">
               Skill
            </a>
            <a className="hover:text-indigo-500" href="#portfolio">
               Portfolio
            </a>
            <a className="hover:text-indigo-500" href="#contact">
               Contact
            </a>
         </div>
      </div>
   );
}
