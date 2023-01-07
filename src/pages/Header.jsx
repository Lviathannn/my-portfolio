import React, { useState, useEffect } from "react";
import { MoonStars } from "react-bootstrap-icons";
import NavBar from "../components/NavBar";
import { useThemeContext } from "../context/ThemeContext";

export default function Header() {
   const { color } = useThemeContext();
   const [dark, setDark] = useState(true);

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
            className={`dark-icon lg:fixed absolute right-10 top-4 text-2xl text-${color}-500 z-[120]`}
            id="dark-mode"
         >
            <MoonStars></MoonStars>
         </button>
      </header>
   );
}
