"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";

type Projectprops = {
  title: string;
  type: number;
  description: string;
  tags: string[] | any;
  imageUrl: string | any;
  links: string[] | any;
};
export default function Project({
  title,
  type,
  description,
  tags,
  imageUrl,
  links,
}: Projectprops) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className="mb-3 group sm:mb-8" exit={{ opacity: 0 }}>
      <section className="bg-gray-100 w-[92vw] md:w-[33rem] md:h-[20rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="text-wrap py-4 px-5 sm:pl-8 sm:pt-8 max-w-full md:max-w-[64%] flex flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-1 leading-normal text-gray-700 text-ellipsis break-keep dark:text-white/70 ">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 justify-self-end group-hover:hidden">
            {tags.map((tag: string, index: number) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="items-center hidden gap-4 mt-4 font-medium group-hover:flex">
            {links?.map((item: any, id: number) => (
              <Link
                key={id}
                href={item.link}
                target="_blank"
                className="flex items-center px-4 py-3 text-sm transition bg-white rounded-lg outline-none cursor-pointer group focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
              >
                {item.title}
                <LuChevronRight />
              </Link>
            ))}
          </div>
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={100}
            className={`hidden md:flex absolute top-8 left-[22rem] ${
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
