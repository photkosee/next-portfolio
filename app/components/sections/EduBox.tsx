"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import educations from "@/app/data/educations";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";

const EduBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl flex flex-col
      gap-y-5 justify-center"
    >
      <h1 className="font-bold text-2xl md:text-3xl text-center">Education</h1>
      <div className="mx-auto max-w-[400px]">
        {educations.map((education, index) => (
          <div className="flex gap-x-5" key={index}>
            <Image
              src={education.logo}
              alt={education.school}
              className="w-[55px] h-[55px] mt-2 object-scale-down"
              width={55}
              height={55}
              priority
            />
            <div className="flex flex-col">
              <div className="text-base font-medium">{education.years}</div>
              <div className="font-semibold text-lg leading-none mb-2">
                {education.school}
              </div>
              <div className="text-sm leading-none text-muted-foreground mb-5">
                {education.stream}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EduBox;
