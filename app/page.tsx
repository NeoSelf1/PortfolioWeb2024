"use client";

import About from "@/components/about";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
// import { Blogs } from "@/components/blogs";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import { isBlogState } from "@/context/recoil-context";
import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { slideAnimation } from "@/lib/motion";
import Link from "next/link";

export default function Home() {
  // const [isBlog, setIsBlog] = useRecoilState(isBlogState);
  return (
    <main className="flex flex-col items-center px-4">
      <AnimatePresence>
        <Header />
        <motion.div
          className={`transition delay-150 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#277332]/40 dark:bg-[#4A96D9]
            
            `}
        />
        <motion.div
          className={`transition delay-150 bg-[#F2E3D5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#277332]
       `}
        />
        <motion.div
          key="custom"
          className="fixed top-8  right-8"
          {...slideAnimation("right")}
        >
          <Link href="/blog">
            <button
              // onClick={() => setIsBlog(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow"
            >
              블로그
            </button>
          </Link>
        </motion.div>
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </AnimatePresence>
    </main>
  );
}
