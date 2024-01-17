import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import {
  LuGraduationCap,
  LuSchool2,
  LuAward,
  LuSmartphone,
} from "react-icons/lu";
import { TbCertificate } from "react-icons/tb";
import firstScene from "@/assets/firstScene.png";
import fitnee from "@/assets/fitnee.png";
import planote from "@/assets/planote.png";
import noteRecognition from "@/assets/noteRecognition.png";
import pawith from "@/assets/pawith.png";
import kits from "@/assets/kits.png";
import portfolio2022 from "@/assets/portfolio2022.png";
import smartooth from "@/assets/smartooth.png";
import realitas from "@/assets/realitas.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "NIS(남경국제학교) 4년간 재학",
    location: "중국, 남경",

    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
  {
    title: "HSK 5급 취득",
    icon: React.createElement(TbCertificate),
    date: "2017",
  },
  {
    title: "동두천 외국어 고등학교 재학",
    description:
      "영어 말하기대회 2등, 전국 시쓰기 대회 입상, 대만해외교류활동 등 다양한 대외활동 참여",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2017",
  },
  {
    title: "TEPS 응시",
    description: "807점 획득",
    icon: React.createElement(TbCertificate),
    date: "2017",
  },
  {
    title: "홍익대학교 디자인컨버전스학부 입학",
    icon: React.createElement(LuGraduationCap),
    date: "2018/3",
  },
  {
    title: `홍익대학교 창업아이템경진대회 최우수상, 세종시 청년창업아이템경진대회 대상 수상`,
    description:
      "안내견 양성을 위한 막대한 비용, 식당 내 동물 출입금지 등의 이유로 인한 활동범위 축소, 안내견을 둘러싼 동물 권리 이슈 등의 이유들로 인하여 시각장애인이 원활한 경제활동을 하지 못하는 문제를 해결하기 위해 시각장애인의 길을 안내해주는 자율주행로봇 이끄미라는 아이디어 제안 및 제출",
    icon: React.createElement(LuAward),
    date: "2018",
  },
  {
    title: "2018 국제 캡스톤 디자인 동상",
    description:
      "냉장고의 사이즈에 비해 냉동보관해야하는 식품들이 많아, 원활한 보관이 힘들다는 자취생들의 공통적인 문제를 해결하고자 냉동실과 냉장실의 경계에 위치한 벽의 높이를 마치 책장처럼 유동적으로 바꾸어, 냉장고 공간을 효율적으로 활용할 수 있는 아이디어를 창출하고 프로토타입 제현에 성공",
    icon: React.createElement(LuAward),
    date: "2019",
  },
  {
    title: "뚝딱뚝딱 학술동아리 회장직 수행",
    description: "120명 규모의 동아리 회장직 1년간 수행",
    icon: React.createElement(LuSchool2),
    date: "2019",
  },
  {
    title: "스마투스 디자이너 사원 근무",
    description:
      "4개월 간 치아진단기기 관리 모바일 앱, 상점 웹페이지, 치아진단기기 카탈로그, 킥스타터 상세페이지 등을 디자인",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "스마투스 개발 사원 근무",
    description: "3개월 간 React 기반 홈페이지 개발",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "홍익대학교 컴퓨터공학(서울) 복수전공",
    icon: React.createElement(LuGraduationCap),
    date: "2022/3",
  },
  {
    title: "Fitnee",
    description:
      "ChatGPT로 개인 맞춤형 운동루틴을 제공하는 모바일 앱을 개발하여, 'University Make Us 데모데이 대상', 'NE(O)RDINARY 데모데이 대상'을 수상하였으며, 플레이스토어, 앱스토어에 모두 출시 완료",
    icon: React.createElement(LuSmartphone),
    date: "2023/7",
  },
  {
    title: "Pawith",
    description:
      "반려동물 공동관리 TODO 모바일 앱을 개발하여, 'KUSITMS 28th 밋업데이 우수상'을 수상하였으며, 앱스토어에 출시 완료",
    icon: React.createElement(LuSmartphone),
    date: "2023/11",
  },
] as const;

export const projectsData = [
  {
    title: "Smartooth Korea",
    type: 0,
    description: `스마투스코리아에서 개발자로 6개월간 근무하며, 정적인 React 웹사이트를 개발했습니다.`,
    tags: ["React", "HTML", "CSS"],
    imageUrl: smartooth,
  },
  {
    title: "FirstScene",
    type: 0,
    description:
      "퍼스트씬이라는 영상제작기업의 브랜딩을 소개하는 홈페이지를 개발하였습니다.",
    tags: ["React", "HTML", "CSS"],
    imageUrl: firstScene,
  },
  {
    title: "악보 인식 프로그램",
    type: 3,
    description:
      "OpenCV-python을 활용하여 삽입된 악보 이미지 내의 계이름들을 계산하고 출력하는 프로그램을 개발하였습니다.",
    tags: ["Python", "OpenCV"],
    imageUrl: noteRecognition,
  },
  {
    title: "Portfolio Web",
    type: 0,
    description:
      "Three.js 을 비롯한 여러 서브 라이브러리들을 활용해 2022년 포트폴리오 웹앱을 개발하였습니다.",
    tags: [
      "React Native",
      "Styled-Component",
      "JavaScript",
      "React Native-cli",
    ],
    imageUrl: portfolio2022,
  },
  {
    title: "Planote",
    type: 1,
    description:
      "개발하였던 악보 인식 OpenCV 프로그램을 OpenCV.js로 변환한 후, GraphQL, Prisma를 사용해 계이름이 출력된 악보를 확인할 수 있는 모바일 앱을 1인 개발하였습니다.",
    tags: ["Python", "OpenCV.js", "GraphQL", "Prisma"],
    imageUrl: planote,
  },
  {
    title: "KITs",
    type: 2,
    description:
      "채용공고 플랫폼인 KITs의 웹과 모바일 앱의 디자인을 총괄하여 진행하였습니다.",
    tags: ["Figma"],
    imageUrl: kits,
  },
  {
    title: "FITNEE",
    type: 1,
    description:
      "ChatGPT로 개인 맞춤형 운동루틴을 제공하는 모바일 앱의 개발을 주도하여, 'University Make Us 데모데이 대상', 'NE(O)RDINARY 데모데이 대상'을 수상하였으며, 출시까지 완료했습니다.",
    tags: [
      "React Native",
      "ChatGPT api",
      "Styled-Component",
      "JavaScript",
      "Expo",
    ],
    imageUrl: fitnee,
  },
  {
    title: "PAWITH",
    type: 1,
    description:
      "반려동물 공동관리 TODO 모바일 앱의 개발을 주도하여, 'KUSITMS 28th 밋업데이 우수상'을 수상하였으며, 출시까지 완료했습니다.",
    tags: [
      "React Native",
      "Styled-Component",
      "JavaScript",
      "React Native-cli",
    ],
    imageUrl: pawith,
  },
  {
    title: "REALITAS",
    type: 2,
    description:
      "피아노 연주를 보조하는 VisionOS 앱을 디자인하였으며, Unity를 통해 프로토타입 앱을 만들어 새로운 UX의 효율을 검증하였습니다.",
    tags: ["Unity", "C#", "Figma", "After Effect"],
    imageUrl: realitas,
  },
  {
    title: "Emoti.(WIP)",
    type: 0,
    description:
      "일기를 작성 후 제출하면, 작성된 일기의 내용에 맞춰 섬 3D모델이 발전하는 웹앱을 현재 개발 중에 있습니다.",
    tags: ["Next.js", "Three.js", "ChatGPT api"],
    imageUrl: null,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Figma",
  "Adobe After Effects",
  "Adobe Illustrator",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
