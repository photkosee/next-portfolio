"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { SiGithub } from "react-icons/si";

import ProjectTab from "@/app/projects/components/ProjectTab";
import WavyPattern from "@/app/components/WavyPattern";

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

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
    },
  },
};

const appearanceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Projects = () => {
  return (
    <main className="min-h-screen pt-28 relative">
      <div className="container px-3 h-full flex flex-col relative gap-4 sm:gap-5">
        <motion.div
          className="w-full flex gap-4 items-center justify-center"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-big">Personal Projects</h2>
          <Rocket className="text-primary" size={30} />
        </motion.div>

        <motion.div
          className="text-muted-foreground text-[13.5px] sm:text-[15px]
          leading-[17px] text-center w-full flex justify-center"
          variants={childVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-1.5">
            Hover over any project card below,
            <div className="text-nowrap flex items-center gap-1.5">
              then click on the{" "}
              <SiGithub className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              icon for further project details
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mb-20"
          variants={appearanceVariants}
          initial="hidden"
          animate="visible"
        >
          <ProjectTab />
        </motion.div>
      </div>

      <div className="absolute min-w-full h-[350px] top-0 -z-20 bg-[#fef5f5] dark:bg-transparent">
        <div className="w-full h-full relative">
          <WavyPattern className="absolute bottom-0 w-full h-auto dark:hidden transform scale-x-[-1]" />
        </div>
      </div>
    </main>
  );
};

export default Projects;
