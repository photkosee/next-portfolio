"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Nav from "@/app/components/headers/Nav";
import MobileNav from "@/app/components/headers/MobileNav";
import Socials from "@/app/components/headers/Socials";

const ModeSwitch = dynamic(
  () => import("@/app/components/headers/ModeSwitch"),
  {
    ssr: false,
  }
);

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
    },
  },
};

const Header = () => {
  const [top, setTop] = useState<boolean>(false);

  useEffect(() => {
    // Whether the current scroll position is at the top of the page
    const scrollYPosition = () =>
      window.scrollY > 0 ? setTop(true) : setTop(false);

    window.addEventListener("scroll", scrollYPosition);

    return () => window.removeEventListener("scroll", scrollYPosition);
  }, []);

  return (
    <header
      className={`
      ${
        top
          ? "bg-white shadow-lg dark:bg-accent"
          : "backdrop-blur-md dark:bg-transparent"
      } sticky w-full py-[14px] sm:py-4 lg:py-[18px] top-0 z-30 transition-all
      `}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-center gap-x-6">
          <motion.div variants={variants} initial="hidden" animate="visible">
            <ModeSwitch />
          </motion.div>

          <div className="flex items-center gap-x-8 py-1">
            <Nav
              containerStyles="hidden md:flex items-center gap-x-8"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="
              absolute left-0 top-full h-[2px] bg-primary w-full rounded-lg
              "
            />
            <Socials
              containerStyles="w-full hidden md:flex justify-center items-center gap-x-5 mb-[2px]"
              iconsStyles="text-[25px] hover:text-primary"
            />
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
