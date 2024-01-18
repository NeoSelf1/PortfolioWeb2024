"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  let [filter, setFilter] = useState([true, true, true, true]);
  const defaultCl =
    "group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 shadow-sm hover:scale-110 active:scale-105 transition cursor-pointer ";

  const handleClick = (num: number) => {
    let tempArr = [...filter];
    if (num == 99) {
      tempArr = tempArr.map((item) => (item = true));
      setFilter(tempArr);
    } else {
      if (filter[num] == true) {
        if (filter.filter((item) => item == true).length > 1) {
          tempArr[num] = false;
        }
      } else {
        tempArr[num] = true;
      }
      setFilter(tempArr);
    }
  };
  return (
    <section
      ref={ref}
      id="projects"
      className="mt-28 mb-28 w-full px-16 scroll-mt-28"
    >
      <SectionHeading>My projects</SectionHeading>
      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium my-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className={`${defaultCl} ${
            filter.filter((item) => item == false).length == 0
              ? "border border-[#277332] bg-white dark:bg-white/75 text-[#0E2614]"
              : "text-black/30 bg-white dark:bg-white/10"
          }`}
          onClick={() => handleClick(99)}
        >
          All
        </a>
        <a
          className={`${defaultCl} ${
            filter[0] == true
              ? "border border-[#277332] bg-white dark:bg-white/75 text-[#0E2614]"
              : "text-black/30 bg-white dark:bg-white/10"
          }`}
          onClick={() => handleClick(0)}
        >
          Web
        </a>
        <a
          className={`${defaultCl} ${
            filter[1] == true
              ? "border border-[#277332] bg-white dark:bg-white/75 text-[#0E2614]"
              : "text-black/30 bg-white dark:bg-white/10"
          }`}
          onClick={() => handleClick(1)}
        >
          Mobile
        </a>
        <a
          className={`${defaultCl} ${
            filter[2] == true
              ? "border border-[#277332] bg-white dark:bg-white/75 text-[#0E2614]"
              : "text-black/30 bg-white dark:bg-white/10"
          }`}
          onClick={() => handleClick(2)}
        >
          Design
        </a>
        <a
          className={`${defaultCl} ${
            filter[3] == true
              ? "border border-[#277332] bg-white dark:bg-white/75 text-[#0E2614]"
              : "text-black/30 bg-white dark:bg-white/10"
          }`}
          onClick={() => handleClick(3)}
        >
          etc
        </a>
      </motion.div>
      <div className="flex-wrap flex item-center gap-4 font-light justify-center ">
        <AnimatePresence>
          {projectsData.map(
            (project, index) =>
              filter[project.type] == true && (
                <React.Fragment key={index}>
                  <Project {...project} />
                </React.Fragment>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
