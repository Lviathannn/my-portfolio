import React from "react";

export default function Adress() {
   return (
      <div className="footer__adress flex flex-col gap-2">
         <h6 className="font-semibold text-slate-700 md:font-semibold md:text-xl dark:text-slate-50">
            Adress
         </h6>
         <div className="flex flex-col text-sm text-slate-500 gap-2 md:text-base dark:text-slate-300">
            <p>Banjarsari - Ciamis</p>
            <p>Jawabarat - Indonesia</p>
            <p>+62-858-6525-7441</p>
            <p>muhammad.asrul.rifa@gmail.com</p>
         </div>
      </div>
   );
}
