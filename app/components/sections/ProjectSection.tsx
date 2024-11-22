"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import ProjectSlider from "@/app/components/ProjectSlider";

const ProjectSection = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();
  const { ref: ref2, animation: animation2 } = useAnimateOnView();
  const { ref: ref3, animation: animation3 } = useAnimateOnView();

  return (
    <section
      className="flex items-center h-auto relative pt-[70px] pb-[140px]
      bg-white dark:bg-transparent"
    >
      <div className="max-w-5xl px-3 sm:px-5 mx-auto w-full flex flex-col gap-y-10">
        <div className="w-full flex flex-col gap-y-5">
          <motion.h1
            className="font-bold text-3xl md:text-4xl text-center"
            ref={ref}
            initial="hidden"
            animate={animation}
          >
            Personal Projects
          </motion.h1>

          <motion.div
            className="mx-auto"
            ref={ref2}
            initial="hidden"
            animate={animation2}
          >
            <Link href="/projects" passHref>
              <Button className="rounded-full gap-3">
                View All Projects
                <Rocket size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="w-full px-3 flex justify-center">
          <ProjectSlider />
        </div>

        <motion.div
          className="mx-auto hidden xl:block"
          ref={ref3}
          initial="hidden"
          animate={animation3}
        >
          <Link href="/projects" passHref>
            <Button className="rounded-full">View More Projects</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
