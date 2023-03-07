import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { Linkedin, Youtube, Github, Instagram } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import { useThemeContext } from "../context/ThemeContext";
import { slideIn } from "../utils/motion";
export default function Footer() {
   const { color } = useThemeContext();
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
      <footer className="overflow-hidden px-7 pb-36 pt-10 dark:bg-slate-800 lg:pb-14">
         <motion.section
            variants={slideIn("down", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            className="mx-auto flex flex-col justify-center gap-7 sm:flex-row sm:justify-evenly md:w-4/5"
         >
            <div className="footer__bio flex flex-col gap-2">
               <h1
                  className={`${memoizedColor} font-medium md:text-xl md:font-semibold`}
               >
                  Muhammad Asrul
               </h1>
               <h6 className="text-sm text-slate-500 dark:text-slate-300 md:text-base">
                  Front-End Developer
               </h6>
               <div className="mb-0 flex gap-3 text-sm text-slate-500 md:text-base">
                  <a
                     target="_blank"
                     className={`hover:text-${color}-500`}
                     rel="noreferrer"
                     href="https://www.instagram.com/lviathann/"
                  >
                     <Instagram></Instagram>
                  </a>
                  <a
                     target="_blank"
                     className={`hover:text-${color}-500`}
                     rel="noreferrer"
                     href="https://www.linkedin.com/in/muhammad-asrul-rifa-anwar-2a3977247/"
                  >
                     <Linkedin></Linkedin>
                  </a>
                  <a
                     target="_blank"
                     className={`hover:text-${color}-500`}
                     rel="noreferrer"
                     href="https://github.com/Lviathannn"
                  >
                     <Github></Github>
                  </a>
                  <a
                     target="_blank"
                     className={`hover:text-${color}-500`}
                     rel="noreferrer"
                     href="https://www.youtube.com/channel/UCdNt6zcpzzi0PU5U-tYuWag"
                  >
                     <Youtube></Youtube>
                  </a>
               </div>
            </div>
            <div className="footer__info flex flex-col gap-2">
               <h6 className="font-semibold text-slate-700 dark:text-slate-50 md:text-xl md:font-semibold">
                  Information
               </h6>
               <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-300 md:text-base">
                  <Link
                     className={`hover:text-${color}-500 cursor-pointer`}
                     to="home"
                  >
                     Home
                  </Link>
                  <Link
                     className={`hover:text-${color}-500 cursor-pointer`}
                     to="about"
                  >
                     About
                  </Link>
                  <Link
                     className={`hover:text-${color}-500 cursor-pointer`}
                     to="skill"
                  >
                     Skill
                  </Link>
                  <Link
                     className={`hover:text-${color}-500 cursor-pointer`}
                     to="portfolio"
                  >
                     Portfolio
                  </Link>
                  <Link
                     className={`hover:text-${color}-500 cursor-pointer`}
                     to="contact"
                  >
                     Contact
                  </Link>
               </div>
            </div>
            <div className="footer__adress flex flex-col gap-2">
               <h6 className="font-semibold text-slate-700 dark:text-slate-50 md:text-xl md:font-semibold">
                  Adress
               </h6>
               <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-300 md:text-base">
                  <p>Banjarsari - Ciamis</p>
                  <p>Jawabarat - Indonesia</p>
                  <p>+62-858-6525-7441</p>
                  <p>muhammad.asrul.rifa@gmail.com</p>
               </div>
            </div>
         </motion.section>
         <div className="footer__copy mt-14 flex items-center justify-center gap-2">
            <p className=" text-center text-sm text-slate-400">
               This website Made Using
            </p>
            <img src="/img/react.svg" alt="" className="w-4" />
            <img src="/img/vite.svg" alt="" className="w-4" />
            <img src="/img/tailwindcss.png" alt="" className="w-4" />
         </div>
      </footer>
   );
}
