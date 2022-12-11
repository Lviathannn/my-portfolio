import React, { useState, useEffect } from "react";
import { MoonStars } from "react-bootstrap-icons";
import NavBar from "../components/NavBar";

export default function Header() {
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
      <header>
         <NavBar />
         <button
            onClick={darkToogle}
            className="dark-icon lg:fixed absolute right-10 top-4 text-2xl text-indigo-500 z-[120]"
            id="dark-mode"
         >
            <MoonStars></MoonStars>
         </button>
      </header>
   );
}
