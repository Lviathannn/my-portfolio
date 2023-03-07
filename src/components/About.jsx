import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { CloudDownload } from "react-bootstrap-icons";
import { useThemeContext } from "../context/ThemeContext";
import { slideIn } from "../utils/motion";
import Header from "./Header";

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

   return (
      <section className="relative mt-10 p-5 lg:mt-20 lg:px-16" id="about">
         <div className="flex flex-col items-center justify-center md:mt-5 md:gap-5 lg:flex-row lg:gap-48">
            <motion.div
               variants={slideIn("left", "tween", 0.5, 1.5)}
               initial="hidden"
               whileInView="show"
               className={`bg-${color}-500 w-72 overflow-hidden rounded-xl lg:w-[450px]`}
            >
               <img src="/img/profile2.png" alt="Profile2" />
            </motion.div>
            <motion.div
               variants={slideIn("right", "tween", 0.5, 1.5)}
               initial="hidden"
               whileInView="show"
               className="mt-10  text-center text-slate-700 md:text-left"
            >
               <Header title1="About" title2="Me" />
               <p className="mt-5 text-slate-500 dark:text-slate-50 md:w-96 lg:w-80">
                  My name is Muhammad Asrul Rifa Anwar , and I have a passion in
                  web programming, especially Front-End, I like to improve my
                  skills by learning every day, I have experience in creating
                  UI, Functionality of a web, Clone websites, and making landing
                  pages
               </p>
               <a
                  href="/img/myCV.pdf"
                  download="myCV.pdf"
                  className={`flex items-center justify-center gap-2 bg-${color}-500 mx-auto mt-5 w-40 rounded-xl py-2 text-center text-white md:mx-0 ${memoizedHoverColor}`}
               >
                  <CloudDownload></CloudDownload> Download CV
               </a>
            </motion.div>
         </div>
      </section>
   );
}
