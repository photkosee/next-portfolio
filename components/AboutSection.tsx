"use client";

import { Variants, motion } from "framer-motion";

import CircleDoodle from "@/components/CircleDoodle";
import QualificationTab from "@/components/QualificationTab";
import WavyPattern from "@/components/WavyPattern";
import { infoDatas } from "@/components/storage";

const AboutSection = () => {
  return (
    <section className="w-full h-[970px] lg:h-[720px] relative">
      <motion.div className="
        container mx-auto flex flex-col w-full h-full lg:flex-row lg:justify-around
        gap-y-6 items-center lg:items-start pt-48 md:pt-[230px] lg:pt-24
        "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex flex-col gap-y-10 items-center lg:mt-24">
          <motion.div className="
            relative w-max flex items-center justify-between
            gap-x-3
            "
          >
            <CircleDoodle />
            <div className="font-bold text-2xl md:text-3xl">
              About Me
            </div>
          </motion.div>

          <div>
            {infoDatas.map((info, index) => (
              <div className="
                flex items-center gap-x-4
                "
                key={index}
              >
                <div className="text-primary">
                  {info.icon}
                </div>
                <div className="text-sm lg:text-[18px] md:leading-[23px]">
                  {info.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div className="h-full max-w-[340px] z-10">
          <QualificationTab />
        </motion.div>
      </motion.div>

      <WavyPattern color="#fef5f5" />
    </section>
  );
};

export default AboutSection;
