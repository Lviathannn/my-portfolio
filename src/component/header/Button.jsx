import React, { useState, useEffect } from "react";
import { MoonStars } from "react-bootstrap-icons";

export default function Button() {
   const [dark, setDark] = useState(false);

   const darkToogle = () => {
      setDark(!dark);
   };

   useEffect(() => {
      if (dark == false) {
         document.body.className = "light";
      } else {
         document.body.className = "dark";
      }
   }, [dark]);

   return (
      <button
         onClick={darkToogle}
         className="dark-icon lg:fixed absolute right-10 top-4 text-2xl text-indigo-500 z-[120]"
         id="dark-mode"
      >
         <MoonStars></MoonStars>
      </button>
   );
}
