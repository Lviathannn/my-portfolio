import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { skillsData } from "../data/dummy";
import CardList from "./CardList";
import Header from "./Header";

export default function Skill() {
   const [activeSkill, setActiveSkill] = useState("language");
   const { color } = useThemeContext();
   const memoizedHoverColor = useMemo(
      () =>
         color == "indigo"
            ? "hover:bg-indigo-500"
            : color == "blue"
            ? "hover:bg-blue-500"
            : color == "red"
            ? "hover:bg-red-500"
            : color == "cyan"
            ? "hover:bg-cyan-500"
            : color == "emerald"
            ? "hover:bg-emerald-500"
            : "hover:bg-rose-500",
      [color]
   );

   return (
      <section className="relative mt-10 lg:mt-32" id="skill">
         <div className=" min-h-screen p-5 lg:px-16">
            <Header title1="My" title2="Skill" customClasses="text-center" />
            <div className=" mt-10 flex justify-center">
               <div className="flex w-full max-w-full space-x-1 rounded-xl bg-slate-300/30 p-1 dark:bg-slate-700/30">
                  <button
                     className={`w-full rounded-xl py-3 text-sm font-medium leading-5 dark:text-white ${memoizedHoverColor} ${
                        activeSkill == "language"
                           ? `bg-${color}-500 text-white`
                           : ` bg-transparent`
                     }`}
                     onClick={() => setActiveSkill("language")}
                  >
                     Language
                  </button>
                  <button
                     className={`w-full rounded-xl py-3 text-sm font-medium leading-5 dark:text-white ${memoizedHoverColor} ${
                        activeSkill == "library"
                           ? `bg-${color}-500 text-white`
                           : ` bg-transparent`
                     }`}
                     onClick={() => setActiveSkill("library")}
                  >
                     Library
                  </button>
                  <button
                     className={`w-full rounded-xl py-3 text-sm font-medium leading-5 ${memoizedHoverColor} dark:text-white ${
                        activeSkill == "tools"
                           ? `bg-${color}-500 text-white`
                           : ` bg-transparent`
                     }`}
                     onClick={() => setActiveSkill("tools")}
                  >
                     Tools
                  </button>
               </div>
            </div>

            <CardList data={skillsData} filter={activeSkill} />
         </div>
      </section>
   );
}
