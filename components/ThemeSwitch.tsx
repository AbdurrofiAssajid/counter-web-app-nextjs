"use client";

import { useTheme } from "../context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-20 right-5 text-lime-900 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:border-yellow-500 border-opacity-40 shadow-md rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-slate-900 dark:text-yellow-500 dark:shadow-slate-700"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}