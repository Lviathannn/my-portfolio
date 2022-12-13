import React from "react";
import { useThemeContext } from "../context/ThemeContext";
import { frontEndData, toolsData } from "../data/dummy";
import CardList from "./CardList";

export default function Skill() {
   const { color } = useThemeContext();

   return (
      <section className="relative" id="skill">
         <div className="min-h-screen lg:p-32 p-5 mt-10 lg:-mt-20">
            <div className="skill__caption">
               <h1 className="font-bold text-4xl lg:text-5xl text-slate-700 text-center dark:text-slate-50">
                  My <span className={`text-${color}-500`}>Skill</span>
               </h1>
               <h2 className="text-center mt-10 text-lg text-slate-500 font-normal dark:text-slate-400">
                  Front-End
               </h2>
            </div>
            <CardList data={frontEndData} />
            <h2 className="skill__tools text-center mt-14 text-lg text-slate-500 font-normal dark:text-slate-400">
               Tools
            </h2>
            <CardList data={toolsData} />
         </div>
      </section>
   );
}
