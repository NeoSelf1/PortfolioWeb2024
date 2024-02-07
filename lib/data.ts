import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
import ibt from "@/assets/IBT.png";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch posts");
  }
};
export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id: string) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch posts");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch users!");
  }
};

//***************************************************************************************************** */

//API 없이 사용하는 데이터들
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
    title: [
      "NIS(남경국제학교) 4년간 재학",
      "Attended Nanjing International School for 4 years",
    ],
    location: "Nanjing, China",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
  {
    title: ["HSK 5급 취득", "Acquired HSK lvl5"],
    icon: React.createElement(TbCertificate),
    date: "2017",
  },
  {
    title: [
      "동두천 외국어 고등학교 재학",
      "Attended Dongducheon Foreign Language High School",
    ],
    description: [
      "영어 말하기대회 2등, 전국 시쓰기 대회 입상, 대만해외교류활동 등 다양한 대외활동 참여",
      "Participation in various external activities such as 2nd place in an English speaking competition, winning a national poetry writing competition, and overseas exchange activities in Taiwan",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2015-2017",
  },
  {
    title: ["TEPS 응시", "Took TEPS exam"],
    description: ["807점 획득", "Acquired 807 points"],
    icon: React.createElement(TbCertificate),
    date: "2017",
  },
  {
    title: [
      "홍익대학교 디자인컨버전스학부 입학",
      "Entered the Department of Design Convergence at Hongik University",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2018/3",
  },
  {
    title: [
      `홍익대학교 창업아이템경진대회 최우수상, 세종시 청년창업아이템경진대회 대상 수상`,
      "Won Hongik University Entrepreneurship Item Contest Grand Prize, Sejong City Youth Entrepreneurship Item Contest Grand Prize",
    ],
    description: [
      "안내견 양성을 위한 막대한 비용, 식당 내 동물 출입금지 등의 이유로 인한 활동범위 축소, 안내견을 둘러싼 동물 권리 이슈 등의 이유들로 인하여 시각장애인이 원활한 경제활동을 하지 못하는 문제를 해결하기 위해 시각장애인의 길을 안내해주는 자율주행로봇 이끄미라는 아이디어 제안 및 제출",
      "Proposed and submitted the idea of an autonomous robot to guide the blind in order to solve the problem of the blind person's inability to engage in smooth economic activities due to the enormous cost of fostering guide dogs, the reduction of the scope of activities due to prohibition of animal access in restaurants, and animal rights issues surrounding guide dogs",
    ],
    icon: React.createElement(LuAward),
    date: "2018",
  },
  {
    title: [
      "2018 국제 캡스톤 디자인 동상",
      "3rd place on 2018 International Capstone Design",
    ],
    description: [
      "냉장고의 사이즈에 비해 냉동보관해야하는 식품들이 많아, 원활한 보관이 힘들다는 자취생들의 공통적인 문제를 해결하고자 냉동실과 냉장실의 경계에 위치한 벽의 높이를 마치 책장처럼 유동적으로 바꾸어, 냉장고 공간을 효율적으로 활용할 수 있는 아이디어를 창출하고 프로토타입 제현에 성공",
      "To solve the common problem of a single-person household that it is difficult to store smoothly because there are many foods that need to be frozen compared to the size of the refrigerator, Came up with an ideas to utilize the refrigerator space efficiently by easily controlling the height of the wall located at the boundary between the freezer and the fridge like a bookcase, and presented prototypes successfully",
    ],
    icon: React.createElement(LuAward),
    date: "2019",
  },
  {
    title: [
      "뚝딱뚝딱 학술동아리 회장직 수행",
      "Held the position of president of the academic club TTuk-ttak",
    ],
    description: [
      "120명 규모의 동아리 회장직 1년간 수행",
      "performed 120-member club presidency for one year",
    ],
    icon: React.createElement(LuSchool2),
    date: "2019",
  },
  {
    title: [
      "스마투스 디자이너 사원 근무",
      "Worked as a designer for Smartooth Korea. co",
    ],
    description: [
      "4개월 간 치아진단기기 관리 모바일 앱, 상점 웹페이지, 치아진단기기 카탈로그, 킥스타터 상세페이지 등을 디자인",
      "Designed mobile apps for dental diagnosis device management, store web pages, dental diagnosis device catalog, kickstarter detailed pages, etc. for 4 months",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: [
      "스마투스 개발 사원 근무",
      "Worked as a developer for Smartooth Korea. co",
    ],
    description: [
      "3개월 간 React 기반 홈페이지 개발",
      "Developed of React-based homepage for 3 months",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: [
      "홍익대학교 컴퓨터공학(서울) 복수전공",
      "Hongik University Computer Engineering Double major",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2022/3",
  },
  {
    title: ["Fitnee", "Fitnee"],
    description: [
      "ChatGPT로 개인 맞춤형 운동루틴을 제공하는 모바일 앱을 개발하여, 'University Make Us 데모데이 대상', 'NE(O)RDINARY 데모데이 대상'을 수상하였으며, 플레이스토어, 앱스토어에 모두 출시 완료",
      "Developed a mobile app that provides personalized exercise routines with ChatGPT, Won the University Make Us Demo Day Grand Prize and the NE(O)RDINARY Demo Day Grand Prize, and finished its release in both Play Store and App Store",
    ],
    icon: React.createElement(LuSmartphone),
    date: "2023/7",
  },
  {
    title: ["Pawith", "Pawith"],
    description: [
      "반려동물 공동관리 TODO 모바일 앱을 개발하여, 'KUSITMS 28th 밋업데이 우수상'을 수상하였으며, 앱스토어에 출시 완료",
      "Developed the TODO mobile app for co-management of pets, won the 'KUSITMS 28th Meetup Day Excellence Award' and finished its release on the App Store",
    ],
    icon: React.createElement(LuSmartphone),
    date: "2023/11",
  },
] as const;

export const projectsData = [
  {
    title: "Smartooth Korea",
    type: 0,
    description: [
      `스마투스코리아에서 개발자로 6개월간 근무하며, 정적인 React 웹사이트를 개발했습니다.`,
      "Worked at Smartooth Korea for 6 months as a Developer, and developed a static React website.",
    ],
    tags: ["React", "HTML", "CSS"],
    imageUrl: smartooth,
    links: [
      {
        title: "Github",
        link: "https://github.com/NeoSelf1/SmartoothHomePage",
      },
    ],
  },
  {
    title: "IBT",
    type: 0,
    description: [
      `카탈로그와 뉴스글의 관리가 가능한 동적인 Next.js 프레임워크의 웹사이트를 개발했습니다.`,
      "Developed a website for the dynamic Next.js framework that enables the management of catalogs and newsletters.",
    ],
    tags: ["Next.js", "Typescript", "Node.js", "MongoDB", "TailwindCSS"],
    imageUrl: ibt,
    links: [
      {
        title: "Github",
        link: "https://github.com/NeoSelf1/IBT_Homepage",
      },
    ],
  },
  {
    title: "FirstScene",
    type: 0,
    description: [
      "퍼스트씬이라는 영상제작기업의 브랜딩을 소개하는 홈페이지를 개발하였습니다.",
      `Developed a website that introduces the branding of a video production company  'FirstScene'`,
    ],
    tags: ["React", "HTML", "CSS"],
    imageUrl: firstScene,
    links: [
      {
        title: "Github",
        link: "https://github.com/NeoSelf1/firstscene",
      },
    ],
  },
  {
    title: "Note Recognition Program",
    type: 3,
    description: [
      "OpenCV-python을 활용하여 삽입된 악보 이미지 내의 계이름들을 계산하고 출력하는 프로그램을 개발하였습니다.",
      "Developed a program that calculates and outputs pitch names in the inserted score image using OpenCV-python",
    ],
    tags: ["Python", "OpenCV"],
    imageUrl: noteRecognition,
    links: [
      {
        title: "Github",
        link: "https://github.com/NeoSelf1/NoteRecognition",
      },
    ],
  },
  {
    title: "Portfolio Web",
    type: 0,
    description: [
      "Three.js 을 비롯한 여러 서브 라이브러리들을 활용해 2022년 포트폴리오 웹앱을 개발하였습니다.",
      "Developed a portfolio web app for 2022 using three.js and other sub-libraries.",
    ],
    tags: [
      "React Native",
      "Styled-Component",
      "JavaScript",
      "React Native-cli",
    ],
    imageUrl: portfolio2022,
    links: [
      {
        title: "Github",
        link: "https://github.com/NeoSelf1/PortfolioWeb",
      },
    ],
  },
  {
    title: "Planote",
    type: 1,
    description: [
      "개발하였던 악보 인식 OpenCV 프로그램을 OpenCV.js로 변환한 후,계이름이 출력된 악보를 확인할 수 있는 모바일 앱을 1인 개발하였습니다.",
      "Developed a mobile app that allows you to check the score printed with the pitch name.",
    ],
    tags: ["Python", "OpenCV.js", "GraphQL", "Prisma"],
    imageUrl: planote,
    links: [
      {
        title: "Github",
        link: "https://github.com/NeoSelf1/Planote",
      },
    ],
  },
  {
    title: "KITs",
    type: 2,
    description: [
      "채용공고 플랫폼인 KITs의 웹과 모바일 앱의 디자인을 총괄하여 진행하였습니다.",
      "Conducted the overall design of the web and mobile apps of KITs, a job posting platform",
    ],
    tags: ["Figma"],
    imageUrl: kits,
    links: [
      {
        title: "Figma",
        link: "https://www.figma.com/file/VTKK0rjMt52zzyGyiDri40/Portfolio-KITS?type=design&node-id=0%3A1&mode=design&t=qOQRCJa9Ssv1Pv2O-1",
      },
    ],
  },
  {
    title: "FITNEE",
    type: 1,
    description: [
      "ChatGPT로 개인 맞춤형 운동루틴을 제공하는 모바일 앱의 개발을 주도하여, 'University Make Us 데모데이 대상', 'NE(O)RDINARY 데모데이 대상'을 수상하였으며, 출시까지 완료했습니다.",
      "Leading the development of a mobile app that provides personalized exercise routines with ChatGPT, Won the University Make Us Demo Day Grand Prize and the NE(O)RDINARY Demo Day Grand Prize, and completed its launch.",
    ],
    tags: ["React Native", "ChatGPT api", "Styled-Component", "Expo"],
    imageUrl: fitnee,
    links: [
      {
        title: "Github",
        link: "https://github.com/FITNEE/FITNEE_Client",
      },
      ,
      { title: "Promo Vid", link: "https://youtu.be/jx1jj89UvNc" },
    ],
  },
  {
    title: "PAWITH",
    type: 1,
    description: [
      "반려동물 공동관리 TODO 모바일 앱의 개발을 주도하여, 'KUSITMS 28th 밋업데이 우수상'을 수상하였으며, 출시까지 완료했습니다.",
      "Taking the lead in the development of the TODO mobile app for co-management of pets, Won the 'KUSITMS 28th Meetup Day Excellence Award' and completed its launch.",
    ],
    tags: [
      "React Native",
      "Styled-Component",
      "JavaScript",
      "React Native-cli",
    ],
    imageUrl: pawith,
    links: [
      {
        title: "Github",
        link: "https://github.com/TEAM-SAMSION/Frontend",
      },
    ],
  },
  {
    title: "REALITAS",
    type: 2,
    description: [
      "피아노 연주를 보조하는 VisionOS 앱을 디자인하였으며, Unity를 통해 프로토타입 앱을 만들어 새로운 UX의 효율을 검증하였습니다.",
      "Designed a VisionOS app that assists you in playing the piano, and created a prototype app through Unity to verify the efficiency of the new UX",
    ],

    tags: ["Unity", "C#", "Figma", "After Effect"],
    imageUrl: realitas,
    links: [
      { title: "Demo Vid", link: "https://youtu.be/pAoHnSKRhY0" },
      { title: "Prototype Vid", link: "https://youtu.be/kOYHOO5wNBw" },
    ],
  },
  {
    title: "Emoti.(WIP)",
    type: 0,
    description: [
      "일기를 작성 후 제출하면, 작성된 일기의 내용에 맞춰 섬 3D모델이 발전하는 웹앱을 현재 개발 중에 있습니다.",
      "Currently developing a web app that develops island 3D models according to the contents of the diary when you write and submit it.",
    ],
    tags: ["Next js", "Three.js", "ChatGPT api", "MongoDB"],
    imageUrl: null,
    links: null,
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
  "Github",
  "Tailwind",
  "Framer Motion",
] as const;
