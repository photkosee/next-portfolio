import { GraduationCap, Laugh, MailIcon, User2 } from "lucide-react";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCypress, TbBrandFramerMotion } from "react-icons/tb";
import { DiCss3, DiHtml5  } from "react-icons/di";
import {
  SiNextdotjs,
  SiVite,
  SiDjango,
  SiTailwindcss,
  SiMui,
  SiWireshark,
  SiGradle,
  SiExpress,
  SiJest
} from "react-icons/si";
import {
  FaCopyright,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact
} from "react-icons/fa";
import { RiBootstrapFill, RiJavascriptFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";

export const educations = [
  {
    school: "The University of New South Wales",
    stream: "Bachelor of Computer Engineering",
    years: "2022 - Nov 2024 (Expected)",
  },
  {
    school: "Thammasat University",
    stream: "Bachelor of Electrical Engineering",
    years: "2019 - 2021",
  },
];

export const experiences = [
  {
    company: "Cloud Natician",
    role: "Software Engineer",
    years: "Sep 2023 - Present",
  },
  {
    company: "UNSW Computer Sceience and Engineering",
    role: "Casual Academic",
    years: "May 2023 - Sep 2023",
  },
];

export const stacks = [
  {
    skill: "Frontend",
    tools: "React, HTML, CSS, JavaScript, TypeScript, Bootstrap, MUI, Tailwind CSS, Next.js",
  },
  {
    skill: "Backend",
    tools: "Node.js, Python, Java, C, Express, Flask, Django",
  },
  {
    skill: "Database",
    tools: "PostgreSQL, MySQL",
  },
  {
    skill: "Others",
    tools: "Wireshark, Jest, Cypress, Gradle, GitLab, GitHub",
  },
  {
    skill: "Learning",
    tools: "Go, Docker, Kubernetes",
  },
];

export const infoDatas = [
  {
    icon: <User2 size={18} />,
    description: "My name is Phot Koseekrainiramon",
  },
  {
    icon: <Laugh size={18} />,
    description: "People also call me Pete/Peach",
  },
  {
    icon: <MailIcon size={18} />,
    description: "kosee.phot@gmail.com",
  },
  {
    icon: <GraduationCap size={18} />,
    description: "Bachelor in Computer Engineering",
  },
];

export const projects = [
  {
    image: "./pym-cover.png",
    category: "frontend",
    name: "Pymetrics Games Site",
    description:
      "A site hosting a series of online assessments designed to measure cognitive and emotional traits with Next.js, TypeScript, and Tailwind CSS",
    link: "",
    github: "https://github.com/photkosee/next-pymetrics-games",
    stack: [
      <SiNextdotjs key={0} />,
      <FaReact key={1} />,
      <BiLogoTypescript key={2} />,
      <SiTailwindcss key={3} />,
    ],
    date: "Developing",
  },
  {
    image: "./portfolio2-cover.png",
    category: "frontend",
    name: "Portfolio Website 2nd Edition",
    description:
      "A website showcasing personal projects with Next.js, TypeScript, Tailwind CSS, and Shadcn UI",
    link: "https://photkosee.github.io/next-portfolio/",
    github: "https://github.com/photkosee/next-portfolio",
    stack: [
      <SiNextdotjs key={0} />,
      <FaReact key={1} />,
      <BiLogoTypescript key={2} />,
      <SiTailwindcss key={3} />,
      <TbBrandFramerMotion key={4} />,
    ],
    date: "Dec 2023",
  },
  {
    image: "./airbrb-cover.png",
    category: "frontend",
    name: "AirBrB",
    description:
      "A property renting service website with React JS, Tailwind CSS, and MUI. Component testing with React Testing Library, and UI Testing with Cypress",
    link: "",
    github: "https://github.com/photkosee/react-airbrb",
    stack: [
      <FaReact key={0} />,
      <RiJavascriptFill key={1} />,
      <SiTailwindcss key={2} />,
      <SiMui size={18} key={3} />,
      <TbBrandCypress key={4} />,
    ],
    date: "Nov 2023",
  },
  {
    image: "./towers-cover.png",
    category: "frontend",
    name: "Pymetrics Tower Game",
    description:
      "A Pymetrics Towers Game with Vite, Tailwind CSS, and react-beautiful-dnd",
    link: "https://photkosee.github.io/react-pymetrics-towers/",
    github: "https://github.com/photkosee/react-pymetrics-towers",
    stack: [
      <SiVite key={0} />,
      <FaReact key={1} />,
      <BiLogoTypescript key={2} />,
      <SiTailwindcss key={3} />,
    ],
    date: "Nov 2023",
  },
  {
    image: "",
    category: "others",
    name: "Network Analyzer",
    description:
      "A simple network monitoring in Go",
    link: "",
    github: "https://github.com/photkosee/network-analyzer",
    stack: [
      <FaGolang key={1} />,
    ],
    date: "Nov 2023",
  },
  {
    image: "./slackr-cover.png",
    category: "frontend",
    name: "Slackr",
    description:
      "A messaging platform with Vanilla JS, and Bootstrap",
    link: "",
    github: "https://github.com/photkosee/vanilla-slackr",
    stack: [
      <RiJavascriptFill key={0} />,
      <DiCss3 key={1} />,
      <DiHtml5 key={2} />,
      <RiBootstrapFill key={3} />,
    ],
    date: "Oct 2023",
  },
  {
    image: "./cse-trainee-cover.png",
    category: "frontend",
    name: "CSE Trainee Application",
    description:
      "Single day project building a profile website with Vite for CSESoc Training Program Application",
    link: "https://photkosee.github.io/cse-trainee/",
    github: "https://github.com/photkosee/cse-trainee",
    stack: [
      <SiVite key={0} />,
      <FaReact key={1} />,
      <RiJavascriptFill key={2} />,
    ],
    date: "Sep 2023",
  },
  {
    image: "",
    category: "others",
    name: "DNS Resolver",
    description:
      "A homemade DNS resolver without supported libraries in Python, using Wireshark to help debuging",
    link: "",
    github: "https://github.com/photkosee/dns-resolver",
    stack: [
      <FaPython key={0} />,
      <SiWireshark size={18} key={1} />,
    ],
    date: "Jul 2023",
  },
  {
    image: "./portfolio1-cover.png",
    category: "frontend",
    name: "Portfolio Website 1st Edition",
    description:
      "A website showcasing personal projects with React",
    link: "https://photkosee.github.io/profile-react/",
    github: "https://github.com/photkosee/profile-react",
    stack: [
      <FaReact key={0} />,
      <RiJavascriptFill key={1} />,
      <DiCss3 key={2} />,
    ],
    date: "Jul 2023",
  },
  {
    image: "",
    category: "fullstack",
    name: "Car Dealer Website",
    description:
      "A car dealer website with Django",
    link: "",
    github: "https://github.com/photkosee/car-dealer",
    stack: [
      <SiDjango key={0} />,
    ],
    date: "Jul 2023",
  },
  {
    image: "",
    category: "others",
    name: "Virtual Memory",
    description:
      "Implementing virtual memory translation in C",
    link: "",
    github: "https://github.com/photkosee/vm-fault",
    stack: [
      <FaCopyright key={0} />,
    ],
    date: "Apr 2023",
  },
  {
    image: "",
    category: "others",
    name: "System Calls",
    description:
      "Implementationing common system calls in C",
    link: "",
    github: "https://github.com/photkosee/file-management",
    stack: [
      <FaCopyright key={0} />,
    ],
    date: "Mar 2023",
  },
  {
    image: "",
    category: "backend",
    name: "Tributary",
    description:
      "A Java API building event-driven systems, applying OOP principles with a UML diagram. Testing with Gradle",
    link: "",
    github: "https://github.com/photkosee/tributary",
    stack: [
      <FaJava key={0} />,
      <SiGradle key={1} />
    ],
    date: "Nov 2022",
  },
  {
    image: "",
    category: "backend",
    name: "Dungeon Mania",
    description:
      "A 2D adventure game in Java, applying OOP principles with a UML diagram. Testing with Gradle",
    link: "",
    github: "https://github.com/photkosee/dungeon-mania",
    stack: [
      <FaJava key={0} />,
      <SiGradle key={1} />
    ],
    date: "Oct 2022",
  },
  {
    image: "",
    category: "backend",
    name: "Back to Blackout",
    description:
      "A demo of satellite orbit and communication in Java, applying OOP principles with a UML diagram. Testing with Gradle",
    link: "",
    github: "https://github.com/photkosee/back-to-blackout",
    stack: [
      <FaJava key={0} />,
      <SiGradle key={1} />
    ],
    date: "Sep 2022",
  },
  {
    image: "",
    category: "backend",
    name: "UNSW Treats",
    description:
      "A messaging platform with Express and TypeScript. Testing with Jest",
    link: "",
    github: "https://github.com/photkosee/unsw-treats",
    stack: [
      <FaNodeJs key={0} />,
      <BiLogoTypescript key={1} />,
      <SiExpress size={19} key={2} />,
      <SiJest size={21} key={3} />,
    ],
    date: "Jul 2022",
  },
];
