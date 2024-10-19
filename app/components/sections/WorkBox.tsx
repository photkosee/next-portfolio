"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import experiences from "@/app/data/experiences";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";

const WorkBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl flex flex-col
      gap-y-5 dark:bg-secondary"
    >
      <h1 className="font-bold text-2xl md:text-3xl text-center">
        Work Experience
      </h1>

      <div className="mx-auto max-w-[450px]">
        {experiences.map((experience, index) => (
          <div className="flex gap-x-5 group" key={index}>
            <div
              className="w-[55px] h-[55px] flex items-center justify-center
                      flex-shrink-0 pt-3"
            >
              <Image
                src={experience.logo}
                alt={experience.company}
                className={`${
                  experience.size ? experience.size : "w-[55px] h-[55px]"
                } object-scale-down`}
                width={0}
                height={0}
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="text-base font-medium">{experience.years}</div>
              <div className="font-semibold text-lg leading-none mb-2">
                {experience.company}
              </div>
              <div className="text-sm leading-none mb-2 font-semibold">
                {experience.role}
              </div>
              <div className="text-sm leading-[18px] text-muted-foreground mb-5">
                {experience.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkBox;
