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

// import React, { createContext, useContext, useState } from "react";

// const StateContext = createContext();

// export const ThemeContext = ({ children }) => {
//    const [currentColor, setCurrentColor] = useState("#03C9D7");

//    return (
//       <StateContext.Provider value={{ currentColor }}>
//          {children}
//       </StateContext.Provider>
//    );
// };

// export const useThemeContext = () => {
//    return useContext(StateContext);
// };
