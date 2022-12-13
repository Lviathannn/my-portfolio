import React, { createContext, useContext, useState } from "react";

const ThemeStateContext = createContext();

export default function ThemeContext({ children }) {
   const [color, setColor] = useState("indigo");

   return (
      <ThemeStateContext.Provider value={{ color, setColor }}>
         {children}
      </ThemeStateContext.Provider>
   );
}

export const useThemeContext = () => {
   return useContext(ThemeStateContext);
};
