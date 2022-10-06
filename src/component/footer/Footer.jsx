import React from "react";
import Social from "./Social";
import Information from "./Information";
import Adress from "./Adress";
import Copyright from "./Copyright";

export default function Footer() {
   return (
      <footer className="px-7 pb-36 pt-10 lg:pb-14 dark:bg-slate-800">
         <section className="flex flex-col gap-7 sm:flex-row justify-center sm:justify-evenly md:w-4/5 mx-auto">
            <Social />
            <Information />
            <Adress />
         </section>
         <Copyright />
      </footer>
   );
}
