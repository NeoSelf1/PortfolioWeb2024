"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profileImg.jpeg";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[70rem] text-left scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center gap-12">
        <div className="flex-column max-w-[680px] px-4 ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-normal !leading-[1.4] sm:text-4xl"
          >
            <span className="font-bold">안녕하세요. </span>
            <br />
            저는 새로운 것을 두려워하지않는
            <br />
            <span className="font-bold">프론트엔드 개발자</span>
            입니다.
            <br />
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-light !leading-[1.4] sm:text-2xl mt-4"
          >
            항상 <span className="font-medium">UX 디자인</span>과 새로운
            <span className="font-medium"> 기술스택</span>을 탐구하는 것을
            즐기며, <br />
            고민보단 <span className="font-medium">실행</span>하는 것을 중요하게
            생각합니다.
          </motion.h3>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="w-1/5 rounded-lg"
        >
          <Image
            src={profile}
            alt="ProfileImage"
            quality="95"
            priority={true}
            className="object-cover shadow-xl rounded-full aspect-[3/4]"
          />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 text-lg font-medium mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          ICT 인턴십 이력서 다운로드
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/NeoSelf1"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
