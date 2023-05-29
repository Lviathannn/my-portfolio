import React, { useMemo } from "react";
import { Link } from "react-scroll";
import { Send, ArrowDownCircleFill } from "react-bootstrap-icons";
import { useThemeContext } from "../context/ThemeContext";
import Header from "./Header";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

export default function Home() {
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
      <section className="relative p-5 lg:px-16" id="home">
         <div className="relative z-50 flex h-screen flex-col items-center justify-center md:gap-5 lg:flex-row-reverse lg:gap-48">
            <motion.div
               variants={slideIn("right", "tween", 0.5, 1.5)}
               initial="hidden"
               whileInView="show"
               className={`bg-${color}-500 blob h-80 w-80 overflow-hidden opacity-100 lg:h-[450px] lg:w-[450px]`}
            >
               <img
                  src="/img/profile.webp"
                  alt="Profile"
                  className="-mb-10 mt-5"
               />
            </motion.div>
            <motion.div
               variants={slideIn("left", "tween", 0.5, 1.5)}
               initial="hidden"
               whileInView="show"
               className="home__caption mt-10  text-center text-slate-700 md:mt-0 md:text-left"
            >
               <Header title1="Hi! I'm" title2="Asrul" />
               <h6 className="mt-1 text-xl font-normal text-slate-600 dark:text-slate-400">
                  Front-End Developer
               </h6>
               <p className="mt-3 text-lg text-slate-500 dark:text-slate-50 lg:w-96">
                  Create engaging and intuitive user experiences through clean
                  and efficient code, utilizing the latest frontend technologies
                  and best practices.
               </p>
               <a
                  href="mailto:muhammad.asrul.rifa@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`bg-${color}-500 mx-auto mt-5 w-40 rounded-xl py-2 text-white md:mx-0 ${memoizedHoverColor} flex cursor-pointer items-center justify-center gap-2 text-center`}
               >
                  <Send></Send> <p>Contact Me</p>
               </a>
            </motion.div>
            <Link
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               to="about"
               className={`home__icon absolute bottom-5 mt-5 hidden h-14 w-14 items-center justify-center rounded-full text-5xl lg:flex text-${color}-500 z-0 animate-bouncefast hover:text-${color}-700 cursor-pointer`}
            >
               <ArrowDownCircleFill></ArrowDownCircleFill>
            </Link>
         </div>
         <div className="fixed top-10 left-4 h-72 w-72 rounded-full  bg-blue-400 opacity-50 blur-3xl  filter md:h-96 md:w-96"></div>
         <div className="fixed top-10 right-0 h-72 w-72 rounded-full  bg-yellow-200 opacity-50 blur-3xl  filter md:h-96 md:w-96"></div>
         <div
            className={`fixed top-96 right-20 h-72 w-72 md:h-96  md:w-96 bg-${color}-500 rounded-full  opacity-50 blur-3xl filter`}
         ></div>
      </section>
   );
}
