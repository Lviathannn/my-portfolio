import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Skill from "./skill/Skill";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";

export default function Main() {
   return (
      <main className="overflow-x-hidden dark:bg-slate-800 dark:text-slate-50">
         <Home />
         <About />
         <Skill />
         <Portfolio />
         <Contact />
      </main>
   );
}
