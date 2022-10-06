import React from "react";
import { MoonStars } from "react-bootstrap-icons";

export default function Button() {
   return (
      <button
         className="dark-icon lg:fixed absolute right-10 top-4 text-2xl text-indigo-500 z-[120]"
         id="dark-mode"
      >
         <MoonStars></MoonStars>
      </button>
   );
}
