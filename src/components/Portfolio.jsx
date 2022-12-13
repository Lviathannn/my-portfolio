import React from "react";
import { portfolioData } from "../data/dummy";
import SwiperList from "./SwiperList";
import { useThemeContext } from "../context/ThemeContext";

export default function Portfolio() {
   const { color } = useThemeContext();

   return (
      <section className="mt-20 relative " id="portfolio">
         <h1 className="portfolio__caption font-bold text-4xl lg:text-5xl text-slate-700 text-center dark:text-slate-50">
            My <span className={`text-${color}-500`}>Portfolio</span>
         </h1>
         <div className="portfolio__card swiper mySwiper mt-10">
            <div className="swiper-wrapper">
               <SwiperList data={portfolioData} />
            </div>
         </div>
      </section>
   );
}
