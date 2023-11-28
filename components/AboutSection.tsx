"use client";

import { Variants, motion } from "framer-motion";

import CircleDoodle from "@/components/CircleDoodle";
import QualificationTab from "@/components/QualificationTab";

const fromLeft: Variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  offscreen: {
    x: -300
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1,
    }
  },
};

const fromRight: Variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  offscreen: {
    x: 300
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1,
    }
  },
};

const AboutSection = () => {
  return (
    <section className="w-full h-[84vh]">
      <motion.div className="
        container mx-auto flex flex-col-reverse md:flex-row w-full h-full
        justify-center gap-y-12 md:justify-around items-center
        "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
        >
          <div className="flex-1">
            <QualificationTab />
          </div>
        </motion.div>

        <motion.div className="
          font-bold relative w-max flex items-center justify-between
          gap-x-3 text-2xl md:text-3xl before:
          "
        >
          <CircleDoodle />
          About me
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
