import React from "react";

export default function Copyright() {
   return (
      <div className="footer__copy mt-14 flex justify-center items-center gap-2">
         <p className=" text-sm text-center text-slate-400">
            This website Made Using
         </p>
         <img src="/img/react.svg" alt="" className="w-4" />
         <img src="/vite.svg" alt="" className="w-4" />
         <img src="/img/tailwindcss.png" alt="" className="w-4" />
      </div>
   );
}
