import { useMemo } from "react";
import { useThemeContext } from "../context/ThemeContext";

export default function Header({ title1, title2, customClasses }) {
   const { color } = useThemeContext();
   const memoizedColor = useMemo(
      () =>
         color == "indigo"
            ? "text-indigo-500"
            : color == "blue"
            ? "text-blue-500"
            : color == "red"
            ? "text-red-500"
            : color == "cyan"
            ? "text-cyan-500"
            : color == "emerald"
            ? "text-emerald-500"
            : "text-rose-500",
      [color]
   );
   return (
      <h1
         className={`${customClasses} text-4xl font-bold dark:text-slate-50 lg:text-6xl`}
      >
         {title1} <span className={memoizedColor}>{title2}</span>
      </h1>
   );
}
