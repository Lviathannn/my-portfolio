import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import { React, useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import HashLoader from "react-spinners/HashLoader";

export default function App() {
   const [loading, setLoading] = useState(false);
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

   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 5000);
   }, []);
   return loading ? (
      <div className="h-screen bg-slate-800 flex justify-center items-center">
         <HashLoader
            loading={loading}
            size={50}
            color="#6366f1"
            aria-label="Loading Spinner"
         />
      </div>
   ) : (
      <>
         <Header />
         <Main />
         <Footer />
      </>
   );
}
