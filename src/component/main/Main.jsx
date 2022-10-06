import React, { useEffect } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Skill from "./skill/Skill";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import ScrollReveal from "scrollreveal";

export default function Main() {
   useEffect(() => {
      const sr = ScrollReveal({
         origin: "top",
         distance: "60px",
         duration: 2500,
         delay: 150,
         reset: true,
      });
      sr.reveal(`
         .about__image, .skill__caption, .skill__tools, .skill__card, .contact__caption ,.footer__bio, .footer__info ,.footer__adress, .footer__copy
      `);
      sr.reveal(`.home__image, .portfolio__caption, .contact__form`, {
         origin: `right`,
      });
      sr.reveal(`.home__caption, .portfolio__card, .contact__info`, {
         origin: `left`,
      });
      sr.reveal(".about__caption", { origin: "bottom" });
   }, []);

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
