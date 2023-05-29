import { CaretRightFill } from "react-bootstrap-icons";
import { useThemeContext } from "../context/ThemeContext";
import { useState } from "react";

export default function Theme() {
  const [activeTheme, setActiveTheme] = useState(false);
  const { setColor } = useThemeContext();

  return (
    <div
      className={`fixed left-0 bottom-1/3 z-50 flex text-center transition-all ${
        activeTheme === false ? "-left-20" : ""
      }`}
    >
      <div
        className={` h-60 w-20 rounded-r-xl bg-white/60 pt-5 backdrop-blur-md dark:bg-slate-700/60`}
      >
        <h1
          className={`mb-5 text-center font-medium text-slate-600 dark:text-white`}
        >
          Theme
        </h1>
        <div className={`flex flex-wrap justify-center gap-2 `}>
          <button
            className="h-6 w-6 rounded-full bg-indigo-500"
            onClick={() => {
              setColor("indigo");
            }}
          ></button>
          <button
            className="h-6 w-6 rounded-full bg-blue-500"
            onClick={() => {
              setColor("blue");
            }}
          ></button>
          <button
            className="h-6 w-6 rounded-full bg-red-500"
            onClick={() => {
              setColor("red");
            }}
          ></button>
          <button
            className="h-6 w-6 rounded-full bg-emerald-500"
            onClick={() => {
              setColor("emerald");
            }}
          ></button>
          <button
            className="h-6 w-6 rounded-full bg-cyan-500"
            onClick={() => {
              setColor("cyan");
            }}
          ></button>
          <button
            className="h-6 w-6 rounded-full bg-rose-500"
            onClick={() => {
              setColor("rose");
            }}
          ></button>
        </div>
        <div className={`flex justify-center`}>
          <a href="https://github.com/Lviathannn" target="_blank">
            <img
              src="/img/github.webp"
              alt="github"
              className={`mt-5 w-10 ${activeTheme === false ? "w-0" : ""}`}
            />{" "}
          </a>
        </div>
      </div>
      <div className="cursor-pointer self-center rounded-r-full">
        <button
          className={`flex h-12 w-12 items-center justify-center rounded-r-full bg-white bg-white/60 text-2xl text-slate-600 backdrop-blur-md dark:bg-slate-700/60 dark:text-white `}
          onClick={() => setActiveTheme(!activeTheme)}
        >
          <CaretRightFill
            className={`transition-all duration-[400ms] ${
              activeTheme ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
