import React from "react";

export default function CardList({ data, filter }) {
   return (
      <div className="xl:px-18 mx-auto grid w-full grid-cols-2 gap-2 py-5 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4">
         {data.map((item, index) => {
            if (item.type === filter) {
               return (
                  <div
                     className=" flex flex-col items-center justify-center rounded-md bg-slate-300/30 px-5 py-10 shadow-md dark:bg-slate-700/30 sm:py-14 md:py-20"
                     key={index}
                  >
                     <img
                        src={`/img/${item.logo}`}
                        alt={item.title}
                        className="h-20 w-20"
                        loading="lazy"
                     />
                     <h1 className="mt-5 font-medium text-slate-500 dark:text-slate-300">
                        {item.title}
                     </h1>
                  </div>
               );
            }
         })}
      </div>
   );
}
