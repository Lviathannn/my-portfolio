import React from "react";
import MySwiper from "./MySwiper";

export default function Portfolio() {
   return (
      <section className="mt-20 relative " id="portfolio">
         <h1 className="portfolio__caption font-bold text-4xl lg:text-5xl text-slate-700 text-center dark:text-slate-50">
            My <span className="text-indigo-500">Portfolio</span>
         </h1>
         <div className="portfolio__card swiper mySwiper mt-10">
            <div className="swiper-wrapper">
               <MySwiper />
            </div>
         </div>
      </section>
   );
}
