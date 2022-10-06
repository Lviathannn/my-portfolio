import React from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Button from "./Button";

export default function Header() {
   return (
      <header>
         <Nav />
         <NavMobile />
         <Button />
      </header>
   );
}
