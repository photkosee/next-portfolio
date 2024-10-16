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

const Projects = () => {
  return (
    <main className="min-h-screen pt-28 relative bg-white dark:bg-transparent">
      <div className="container px-2 xs:px-3 h-full flex flex-col relative gap-y-7 xs:gap-y-10">
        <motion.div
          className="w-full flex gap-x-3 items-center justify-center"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-big">Personal Projects</h2>
          <Rocket className="text-primary hidden sm:block" size={30} />
        </motion.div>

        <motion.div className="flex justify-center pb-20 w-full relative">
          <ProjectTab />
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
