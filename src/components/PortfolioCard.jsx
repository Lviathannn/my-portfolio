import { motion } from "framer-motion";
import { useMemo } from "react";
import { Link } from "react-scroll";
import { useThemeContext } from "../context/ThemeContext";
import { portfolioVariant } from "../utils/motion";

export default function PortfolioCard({ title, imgUrl, tools, link }) {
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
   return (
      <motion.div
         variants={portfolioVariant}
         className="bg w-full rounded-xl bg-slate-300/50 p-2 dark:bg-slate-700/50"
      >
         <img src={`/img/${imgUrl}`} alt={title} className=" rounded-md" />
         <div className="my-3 px-2 ">
            <h3 className={`font-semibold text-slate-700 dark:text-slate-300 `}>
               {title}
            </h3>
         </div>
         <div className="mt-3 mb-3 flex gap-1 px-2">
            {tools.map((tool, index) => {
               return (
                  <img
                     src={`/img/${tool}`}
                     alt={tool}
                     key={index}
                     className="h-6 w-6"
                     loading="lazy"
                  />
               );
            })}
         </div>
         {link == "home" ? (
            <Link
               to="home"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               rel="noreferrer"
               className={`block bg-${color}-500 mx-auto mt-5 w-[95%] rounded-lg py-3 text-center text-white ${memoizedHoverColor} cursor-pointer`}
            >
               Demo
            </Link>
         ) : (
            <a
               href={link}
               className={`block bg-${color}-500 mx-auto mt-5 w-[95%] rounded-lg py-3 text-center text-white ${memoizedHoverColor}`}
               target="_blank"
            >
               Demo
            </a>
         )}
      </motion.div>
   );
}
