"use client";

import { isKoreanState } from "@/context/recoil-context";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useRecoilState } from "recoil";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [isKorean, setIsKorean] = useRecoilState(isKoreanState);

  return (
    <>
      <button
        className="fixed bottom-5 right-24 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={() => setIsKorean(!isKorean)}
      >
        <h1 className="font-bold">{isKorean ? "EN" : "KR"}</h1>
      </button>

      <button
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </>
  );
}
