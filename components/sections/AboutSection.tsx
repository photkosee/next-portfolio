"use client";

import { motion } from "framer-motion";

import CircleDoodle from "@/components/background/CircleDoodle";
import QualificationTab from "@/components/sections/QualificationTab";
import WavyPattern from "@/components/background/WavyPattern";
import { infoDatas } from "@/components/storage";
import { fadeIn } from "@/components/variants";

const AboutSection = () => {
  return (
    <section className="w-full h-[970px] lg:h-[720px] relative">
      <motion.div
        className="
        container mx-auto flex flex-col w-full h-full lg:flex-row lg:justify-around
        gap-y-6 items-center lg:items-start pt-48 md:pt-[230px] lg:pt-24
        max-w-screen overflow-x-hidden
        "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col gap-y-10 items-center lg:mt-24"
          variants={fadeIn("left")}
        >
          <div
            className="
            relative w-max flex items-center justify-between
            gap-x-3
            "
          >
            <CircleDoodle />
            <div className="font-bold text-2xl md:text-3xl">About Me</div>
          </div>

          <div>
            {infoDatas.map((info, index) => (
              <div
                className="
                flex items-center gap-x-4
                "
                key={index}
              >
                <div className="text-primary">{info.icon}</div>
                <div className="text-sm lg:text-[18px] md:leading-[23px]">
                  {info.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="h-full max-w-[340px] z-10"
          variants={fadeIn("right")}
        >
          <QualificationTab />
        </motion.div>
      </motion.div>

      <WavyPattern color="#fef5f5" />
    </section>
  );
};

export default AboutSection;
