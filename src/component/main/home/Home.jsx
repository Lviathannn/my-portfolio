import React from "react";
import Caption from "./Caption";

export default function Home() {
   return (
      <section className="relative" id="home">
         <Caption />
         <div className="absolute top-10 left-4 w-72 h-72 bg-blue-400 rounded-full  filter opacity-50 blur-3xl"></div>
         <div className="absolute top-10 right-0 w-72 h-72 bg-yellow-200 rounded-full  filter blur-3xl opacity-50"></div>
         <div className="absolute top-44 right-20 w-72 h-72 md:top-60 bg-indigo-500 rounded-full  filter blur-3xl opacity-50"></div>
      </section>
   );
}
