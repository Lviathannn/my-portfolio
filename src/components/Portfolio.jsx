import React, { useMemo } from "react";
import { portfolioData } from "../data/dummy";
import { useThemeContext } from "../context/ThemeContext";
import PortfolioCard from "./PortfolioCard";
import Header from "./Header";
import { motion } from "framer-motion";
import { containerVariant, portfolioContainerVariant } from "../utils/motion";

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
      <section
         className="relative mt-10 min-h-screen p-5 lg:mt-20 lg:px-16"
         id="portfolio"
      >
         <Header title1="My" title2="Portfolio" customClasses="text-center" />
         <motion.div
            variants={portfolioContainerVariant}
            initial="hidden"
            whileInView="show"
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
         >
            {portfolioData.map((portfolio) => {
               return (
                  <PortfolioCard
                     key={portfolio.title}
                     title={portfolio.title}
                     imgUrl={portfolio.Image}
                     tools={portfolio.tools}
                     link={portfolio.link}
                  />
               );
            })}
         </motion.div>
      </section>
   );
}
