import React, { useMemo } from "react";
import { portfolioData } from "../data/dummy";
import SwiperList from "./SwiperList";
import { useThemeContext } from "../context/ThemeContext";

export default function Portfolio() {
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
      <section className="mt-20 relative " id="portfolio">
         <h1 className="portfolio__caption font-bold text-4xl lg:text-5xl text-slate-700 text-center dark:text-slate-50">
            My <span className={memoizedColor}>Portfolio</span>
         </h1>
         <div className="portfolio__card swiper mySwiper mt-10">
            <div className="swiper-wrapper">
               <SwiperList data={portfolioData} />
            </div>
         </div>
      </section>
   );
}
