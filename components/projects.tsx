"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useRecoilState } from "recoil";
import { isKoreanState } from "@/context/recoil-context";

export default function Projects() {
  const [isKorean, setIsKorean] = useRecoilState(isKoreanState);
  const { ref } = useSectionInView("Projects", 0.2);
  let [filter, setFilter] = useState([true, true, true, true]);
  const defaultCl =
    "group px-4 py-2 md:px-7 md:py-3 flex items-centermd:gap-2 rounded-full outline-none focus:scale-110 shadow-sm hover:scale-110 active:scale-105 transition cursor-pointer ";

  const handleClick = (num: any) => {
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
      <div className="flex sm:flex-row items-center justify-center gap-2 md:gap-4 my-8 text-sm font-bold md:text-lg md:font-medium ">
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
      </div>
      <div className="flex-wrap flex item-center gap-4 font-light justify-center ">
        <AnimatePresence>
          {projectsData.map(
            (project, index) =>
              filter[project.type] == true && (
                <React.Fragment key={index}>
                  <Project
                    title={project.title}
                    type={project.type}
                    description={
                      isKorean ? project.description[0] : project.description[1]
                    }
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    links={project.links}
                  />
                </React.Fragment>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
