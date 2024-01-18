"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
type ProjectProps = (typeof projectsData)[number];
import { LuChevronRight } from "react-icons/lu";

export default function Project({
  title,
  type,
  description,
  tags,
  github,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8" exit={{ opacity: 0 }}>
      <section className="bg-gray-100 w-[34rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-4 px-5 sm:pl-8 sm:pt-8 sm:max-w-[64%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="break-keep mt-1 leading-normal text-gray-700 dark:text-white/70 ">
            {description}
          </p>
          <ul className="flex flex-wrap justify-self-end mt-4 gap-2 group-hover:hidden">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-4 font-medium mt-4 group-hover:flex">
            {github && (
              <a
                href={github}
                target="_blank"
                className="group bg-white px-4 py-3 flex  items-center rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              >
                Github
                <LuChevronRight />
              </a>
            )}
            <a className="group bg-white px-4 py-3 flex  items-center rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
              Blog
              <LuChevronRight />
            </a>
          </div>
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={100}
            className={`absolute top-8 left-[22rem] ${
              type == 1 ? "h-[32rem]" : "h-[24rem]"
            } object-left w-auto rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
       `}
          />
        )}
      </section>
    </motion.div>
  );
}
