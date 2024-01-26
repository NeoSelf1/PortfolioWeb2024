"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useRecoilState } from "recoil";
import { isKoreanState } from "@/context/recoil-context";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  const [isKorean, setIsKorean] = useRecoilState(isKoreanState);
  return (
    <motion.section
      ref={ref}
      className="mt-32 md:mt-0 mb-32 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {isKorean ? (
        <p className="mb-3 font-light">
          저는 항상 기술 트랜드의 <span className="font-bold">최전선</span>
          에서 기술의 발전에 기여하는 사람이 되고 싶습니다. 그러기 위해 저는
          항상 현재 주어진 자리에서 만족하지 않고,
          <span className="font-bold"> 과감한 도전을 반복</span>해 제의 능력폭을
          넓히고자 했습니다. 피아노 연주를 하던 도중 악보 계이름 음정을 직접
          출력해주는 프로그램이 있으면 좋겠다는 생각에, 무작정 서적과 유튜브를
          통해 Computer Vision 라이브러리인{" "}
          <span className="font-bold">
            OpenCV를 python과 함께 zero-base에서부터 독학하여 4개월동안
            프로그램을 완성
          </span>
          하였으며, 그로부터 컴퓨터 언어의 매력에 빠져 직접 결과물을 만들어낼 수
          있는 풀스택 개발자가 되고자, 2년간 쌓아온 시각 디자이너의 커리어를
          과감히 버리고 컴퓨터공학을 복수전공하게 되었습니다. 그 덕분에, 저는
          현재 새로운 기술이 등장할때마다 바로 도전할 수 있도록 CS지식을 얻을 수
          있었습니다. 제 핵심 스택은 React-native를 바탕으로 하는{" "}
          <span className="font-bold">Javascript와 Typescript</span>이며, 현재는
          백엔드의 매력에 빠져
          <span className="font-bold"> Next.js</span>를 독학중에 있습니다.
        </p>
      ) : (
        <p className="mb-3 font-light">
          I always want to be someone who contributes to the development of
          technology at the <span className="font-bold"> forefront</span> of the
          technology trend. To do so, I always wanted to expand my ability by
          <span className="font-bold"> repeating bold challenges</span> and not
          being satisfied with the present position. I thought it would be nice
          to have a program that directly outputs the musical pitch name while
          playing the piano, so I learned{" "}
          <span className="font-bold">
            OpenCV, a computer vision library, from zero-base with Python{" "}
          </span>
          through books and YouTube for{" "}
          <span className="font-bold">4 months</span> to complete the program.
          From then on, I boldly abandoned my career as a visual designer for
          two years and majored in computer engineering in double major in
          computer engineering, in order to become a full-stack developer who
          can produce results directly. Thanks to that, I was able to gain CS
          knowledge so that I can immediately challenge whenever a new
          technology emerges.
          <br /> My core stacks are Javascript and Typescript, which are based
          on React-native, and I'm currently learning{" "}
          <span className="font-bold">Next.js</span> by myself because I'm
          fascinated by the backend.
        </p>
      )}
    </motion.section>
  );
}
