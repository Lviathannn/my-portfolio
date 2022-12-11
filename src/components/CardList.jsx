import React from "react";

export default function CardList({ data }) {
   return (
      <div className="flex mt-5 flex-wrap gap-4 lg:gap-5 justify-center sm:w-4/5 mx-auto">
         {data.map((item, index) => {
            return (
               <div
                  className="w-32 lg:w-48 lg:h-60 h-40 bg-white dark:bg-slate-700 shadow-md flex flex-col justify-center items-center rounded-md skill__card"
                  key={index}
               >
                  <img
                     src={`/img/${item.logo}`}
                     alt={item.title}
                     className="w-20"
                  />
                  <h1 className="font-medium text-slate-500 mt-5 dark:text-slate-300">
                     {item.title}
                  </h1>
               </div>
            );
         })}
      </div>
   );
}
