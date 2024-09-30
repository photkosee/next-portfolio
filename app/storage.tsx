import { GraduationCap, Laugh, MailIcon, User2 } from "lucide-react";

export const educations = [
  {
    school: "The University of New South Wales",
    stream: "Bachelor of Computer Engineering",
    years: "2022 - Nov 2024 (Expected)",
    logo: "./images/unsw.webp",
  },
  {
    school: "Thammasat University",
    stream: "Bachelor of Electrical Engineering",
    years: "2019 - 2021",
    logo: "./images/tu.webp",
  },
];

export const experiences = [
  {
    company: "Cloud Natician",
    role: "Software Engineer Intern",
    years: "Sep 2023 - Feb 2024",
    logo: "./images/cloudnc.webp",
    description:
      "Developed and maintained responsive websites according to customers’ requirements",
  },
  {
    company: "UNSW Computer Sceience and Engineering",
    role: "Casual Academic",
    years: "May 2023 - Sep 2023",
    logo: "./images/unsw-cse.webp",
    description:
      "Teaching Assistant (Marker role) for COMP3121/9101 (Algorithms and Programming Techniques course) at UNSW",
  },
];

export const stacks = [
  {
    skill: "Most Comfortable",
    tools: [
      {
        name: "React",
        icon: "reactjs",
      },
      {
        name: "Next.js",
        icon: "nextjs2",
      },
      {
        name: "HTML",
        icon: "html5",
      },
      {
        name: "CSS",
        icon: "css3",
      },
      {
        name: "TailwindCSS",
        icon: "tailwindcss",
      },
      {
        name: "Redux Toolkit",
        icon: "redux",
      },
      {
        name: "Zustand",
        icon: "",
      },
      {
        name: "Javascript",
        icon: "js",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "Shadcn/UI",
        icon: "shadcnui",
      },
    ],
  },
  {
    skill: "Some Experienced",
    tools: [
      {
        name: "Python",
        icon: "python",
      },
      {
        name: "Java",
        icon: "java",
      },
      {
        name: "C",
        icon: "",
      },
      {
        name: "Express",
        icon: "",
      },
      {
        name: "Bootstrap",
        icon: "bootstrap5",
      },
      {
        name: "MUI",
        icon: "materialui",
      },
      {
        name: "Ant Design",
        icon: "antd",
      },
      {
        name: "NextUI",
        icon: "",
      },
      {
        name: "Framer Motion",
        icon: "",
      },
      {
        name: "Prisma",
        icon: "prisma",
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
      },
      {
        name: "MongoDB",
        icon: "mongodb",
      },
      {
        name: "Firebase",
        icon: "firebase",
      },
      {
        name: "Wireshark",
        icon: "",
      },
      {
        name: "Jest",
        icon: "jest",
      },
      {
        name: "Cypress",
        icon: "cypress",
      },
      {
        name: "Gradle",
        icon: "",
      },
      {
        name: "Postman",
        icon: "postman",
      },
    ],
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
    description: "phot.kosee@gmail.com",
  },
  {
    icon: <GraduationCap size={18} />,
    description: "Bachelor in Computer Engineering",
  },
  {
    icon: <GraduationCap size={18} />,
    description: "Bachelor in Electrical Engineering",
  },
];

export const projects = [
  {
    image: "./images/positivus-cover.webp",
    category: "frontend",
    name: "Positivus",
    description:
      "Figma to Code using React with TypeScript, Vite, and Tailwind CSS.",
    link: "https://positivus-phot.vercel.app/",
    github: "https://github.com/photkosee/positivus",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "September 2024",
  },
  {
    image: "./images/smarttrip-cover.webp",
    category: "fullstack",
    name: "Smart Trip",
    description:
      "Create, customize, and optimize your itineraries with this free AI trip planner, powered by Gemini AI.",
    link: "https://smart-trip-alpha.vercel.app/",
    github: "https://github.com/photkosee/smart-trip",
    stack: ["nextjs2", "tailwindcss", "shadcnui", "redux", "firebase"],
    date: "September 2024",
    show: true,
  },
  {
    image: "./images/wam-to-gpa.webp",
    category: "frontend",
    name: "UNSW WAM to GPA Convertor",
    description:
      "An app that helps UNSW students convert their WAM to GPA by simply uploading their academic statement.",
    link: "https://unsw-wam-to-gpa-convertor.vercel.app/",
    github: "https://github.com/photkosee/unsw-wam-to-gpa-convertor",
    stack: ["nextjs2", "typescript", "tailwindcss", "shadcnui"],
    date: "September 2024",
    show: true,
  },
  {
    category: "backend",
    name: "Cinevent",
    description:
      "An API that handles movie theater bookings, seat reservations, and admin management.",
    github: "https://github.com/photkosee/cinevent",
    stack: ["nodejs", "mongoose", "mongodb"],
    date: "August 2024",
  },
  {
    image: "./images/wongnai-cover.webp",
    category: "fullstack",
    name: "What to Order",
    description:
      "API Gateway and Frontend for Online Ordering System. Using Jest for testing both frontend and backend.",
    github: "https://github.com/photkosee/wongnai-frontend-assignment2023/",
    stack: ["reactjs", "typescript", "tailwindcss", "nodejs", "jest"],
    date: "July 2024",
  },
  {
    image: "./images/task-cover.webp",
    category: "fullstack",
    name: "Task A Gotchi",
    description:
      "A responsive web app that gamifies users' habits to boost their productivity.",
    github: "https://github.com/photkosee/task-a-gotchi",
    stack: ["nextjs2", "tailwindcss", "antd", "mongodb", "prisma"],
    date: "UNSW Flagship Hackathon",
    show: true,
  },
  {
    image: "./images/dota2.webp",
    category: "frontend",
    name: "Dota 2 Hero Matchmaker",
    description:
      "A responsive web app that helps DOTA 2 players find the perfect hero according to their preferences.",
    link: "https://photkosee.github.io/dota2-hero-matchmaker/#/",
    github: "https://github.com/photkosee/dota2-hero-matchmaker",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "June 2024",
  },
  {
    image: "./images/flexbox-cover.webp",
    category: "frontend",
    name: "Flexbox Froggy Hardcore",
    description:
      "A game where users help the frogs reach their lily pads by using CSS Flexbox properties, featuring an UNLIMITED number of challenges.",
    link: "https://photkosee.github.io/flexboxfroggy-hardcore/",
    github: "https://github.com/photkosee/flexboxfroggy-hardcore",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "June 2024",
    show: true,
  },
  {
    image: "./images/pogo-cover.webp",
    category: "frontend",
    name: "POGO - Power Up",
    description:
      "Easily calculate and plan out your resources for powering up your pokemons with this tool!",
    link: "https://photkosee.github.io/pogo-powerup/",
    github: "https://github.com/photkosee/pogo-powerup",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss", "antd"],
    date: "May 2024",
  },
  {
    image: "./images/geo-cover.webp",
    category: "frontend",
    name: "GeoGenius Info",
    description:
      "Explore the information of each country with just a click on a world map.",
    link: "https://geogenius-two.vercel.app/",
    github: "https://github.com/photkosee/geogenius",
    stack: ["nextjs2", "typescript", "tailwindcss"],
    date: "Apr 2024",
  },
  {
    image: "./images/chillflix-cover.webp",
    category: "frontend",
    name: "ChillFlix - Anime Recommender",
    description:
      "Looking for an anime to watch but not sure what to watch? Search for it here!",
    link: "https://chillflix-phot.vercel.app/",
    github: "https://github.com/photkosee/chillflix",
    stack: ["nextjs2", "typescript", "tailwindcss", "zod", "redux"],
    date: "Mar 2024",
  },
  {
    image: "./images/xo-cover.webp",
    category: "frontend",
    name: "XO is Unbeatable (AI)",
    description:
      "How good are you in Tic Tac Toe? Try beating my AI (Alpha-Beta Pruning) in this Tic Tac Toe game!",
    link: "https://photkosee.github.io/xo-is-unbeatable/",
    github: "https://github.com/photkosee/xo-is-unbeatable",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "Mar 2024",
  },
  {
    image: "./images/blackpeach-cover.webp",
    category: "frontend",
    name: "BlackPeach | SHOP",
    description:
      "An e-commerce platform selling all of albums and merchandise of a popular K-pop band.",
    link: "https://blackpeach.vercel.app/",
    github: "https://github.com/photkosee/blackpeach",
    stack: ["nextjs2", "typescript", "tailwindcss", "redux"],
    date: "Feb 2024",
    show: true,
  },
  {
    image: "./images/portfolio2-cover.webp",
    category: "frontend",
    name: "Portfolio Website 2nd Edition",
    description:
      "This is the site you are looking at right now. Check out my other projects!",
    link: "https://photkosee.github.io/next-portfolio/",
    github: "https://github.com/photkosee/next-portfolio",
    stack: ["nextjs2", "typescript", "tailwindcss", "shadcnui"],
    date: "Dec 2023",
  },
  {
    image: "./images/towers-cover.webp",
    category: "frontend",
    name: "Pymetrics Towers Game",
    description:
      "Want to practice Pymetrics tests for your interview? Try this game out!",
    link: "https://photkosee.github.io/react-pymetrics-towers/",
    github: "https://github.com/photkosee/react-pymetrics-towers",
    stack: ["vitejs", "reactjs", "typescript", "tailwindcss"],
    date: "Dec 2023",
  },
  // {
  //   image: "./images/airbrb-cover.webp",
  //   category: "frontend",
  //   name: "AirBrB",
  //   description:
  //     "A property renting service website with React JS, Tailwind CSS, and MUI. Component testing with React Testing Library, and UI Testing with Cypress",
  //   github: "https://github.com/photkosee/react-airbrb",
  //   stack: ["reactjs", "tailwindcss", "materialui", "cypress"],
  //   date: "Nov 2023",
  // },
  {
    category: "others",
    name: "Network Analyzer",
    description:
      "Looking for a tool to capture and monitor network traffic? Try this tool out!",
    github: "https://github.com/photkosee/network-analyzer",
    stack: ["go"],
    date: "Nov 2023",
  },
  // {
  //   image: "./images/slackr-cover.webp",
  //   category: "frontend",
  //   name: "Slackr",
  //   description: "A messaging platform with Vanilla JS, and Bootstrap",
  //   github: "https://github.com/photkosee/vanilla-slackr",
  //   stack: ["js", "html5", "css3", "bootstrap5"],
  //   date: "Oct 2023",
  // },
  // {
  //   category: "others",
  //   name: "DNS Resolver",
  //   description:
  //     "A homemade DNS resolver without supported libraries in Python, using Wireshark to help debuging",
  //   github: "https://github.com/photkosee/dns-resolver",
  //   stack: ["python"],
  //   date: "Jul 2023",
  // },
  // {
  //   category: "others",
  //   name: "Virtual Memory",
  //   description: "Implementing virtual memory translation in C",
  //   github: "https://github.com/photkosee/vm-fault",
  //   stack: [],
  //   date: "Apr 2023",
  // },
  // {
  //   category: "others",
  //   name: "System Calls",
  //   description: "Implementationing common system calls in C",
  //   github: "https://github.com/photkosee/file-management",
  //   stack: [],
  //   date: "Mar 2023",
  // },
  // {
  //   category: "backend",
  //   name: "Tributary",
  //   description:
  //     "A Java API building event-driven systems, applying OOP principles with a UML diagram. Testing with Gradle",
  //   github: "https://github.com/photkosee/tributary",
  //   stack: ["java"],
  //   uml: "https://drive.google.com/file/d/1RplnTzt38UexT7zDhYWakjefp2hCob3S/view",
  //   date: "Nov 2022",
  // },
  // {
  //   category: "backend",
  //   image: "./images/dungeonmania-cover.webp",
  //   name: "Dungeon Mania",
  //   description:
  //     "A 2D adventure game in Java, applying OOP principles with a UML diagram. Testing with Gradle",
  //   github: "https://github.com/photkosee/dungeon-mania",
  //   stack: ["java"],
  //   uml: "https://drive.google.com/file/d/1uJqEFKwZRKXHGMQgYjq-tQ8MB0pi_Rb3/view",
  //   date: "Oct 2022",
  // },
  // {
  //   category: "backend",
  //   image: "./images/backtoblackout-cover.webp",
  //   name: "Back to Blackout",
  //   description:
  //     "A demo of satellite orbit and communication in Java, applying OOP principles with a UML diagram. Testing with Gradle",
  //   github: "https://github.com/photkosee/back-to-blackout",
  //   stack: ["java"],
  //   uml: "https://drive.google.com/file/d/1mV0JWhQIZe4L92LekX2HKLVFP1bh0QYj/view",
  //   date: "Sep 2022",
  // },
  // {
  //   category: "backend",
  //   name: "UNSW Treats",
  //   description:
  //     "A messaging platform with Express and TypeScript. Testing with Jest",
  //   github: "https://github.com/photkosee/unsw-treats",
  //   stack: ["nodejs", "typescript", "jest"],
  //   date: "Jul 2022",
  // },
];
