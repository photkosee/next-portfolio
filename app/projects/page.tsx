"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import ProjectTab from "@/app/projects/components/ProjectTab";

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
      <div className="container px-1 sm:px-3 h-full flex flex-col relative gap-4 sm:gap-5">
        <motion.div
          className="w-full flex gap-x-3 items-center justify-center pb-5"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-big">Personal Projects</h2>
          <Rocket className="text-primary hidden sm:block" size={30} />
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
    </main>
  );
};

export default Projects;
