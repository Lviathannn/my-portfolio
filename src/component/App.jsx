import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import { React, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function App() {
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
      <>
         <Header />
         <Main />
         <Footer />
      </>
   );
}
