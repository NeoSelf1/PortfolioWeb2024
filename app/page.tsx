"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import { isBlogState } from "@/context/recoil-context";
import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { slideAnimation } from "@/lib/motion";

export default function Home() {
  const [isBlog, setIsBlog] = useRecoilState(isBlogState);
  return (
    <main className="flex flex-col items-center px-4">
      <AnimatePresence>
        {!isBlog ? (
          <>
            <motion.div
              key="custom"
              className="fixed inset-0 flex justify-end items-start p-8"
              {...slideAnimation("right")}
            >
              <button
                onClick={() => setIsBlog(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                블로그
              </button>
            </motion.div>
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
          </>
        ) : (
          <>
            <motion.div
              className="fixed inset-0 flex justify-start items-start p-8"
              {...slideAnimation("left")}
            >
              <button
                onClick={() => setIsBlog(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow"
              >
                포트폴리오로 돌아가기
              </button>
            </motion.div>
            <Blog />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
