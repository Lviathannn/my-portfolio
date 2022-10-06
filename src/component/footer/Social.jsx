import React from "react";
import { Github } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

export default function Social() {
   return (
      <div className="footer__bio flex flex-col gap-2">
         <h1 className="text-indigo-500 font-medium md:font-semibold md:text-xl">
            Muhammad Asrul
         </h1>
         <h6 className="text-slate-500 text-sm md:text-base dark:text-slate-300">
            Front-End Developer
         </h6>
         <div className="flex gap-3 text-slate-500 text-sm mb-0 md:text-base">
            <a
               target="_blank"
               className="hover:text-indigo-500"
               rel="noreferrer"
               href="https://www.instagram.com/lviathann/"
            >
               <Instagram></Instagram>
            </a>
            <a
               target="_blank"
               className="hover:text-indigo-500"
               rel="noreferrer"
               href="https://www.linkedin.com/in/muhammad-asrul-rifa-anwar-2a3977247/"
            >
               <Linkedin></Linkedin>
            </a>
            <a
               target="_blank"
               className="hover:text-indigo-500"
               rel="noreferrer"
               href="https://github.com/Lviathannn"
            >
               <Github></Github>
            </a>
            <a
               target="_blank"
               className="hover:text-indigo-500"
               rel="noreferrer"
               href="https://www.youtube.com/channel/UCdNt6zcpzzi0PU5U-tYuWag"
            >
               <Youtube></Youtube>
            </a>
         </div>
      </div>
   );
}
