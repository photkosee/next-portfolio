"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/app/variants";
import CircleDoodle from "@/app/components/CircleDoodle";
import QualificationTab from "@/app/components/QualificationTab";

const AboutSection = () => {
  return (
    <section className="w-full min-h-[1150px] lg:min-h-[850px] relative">
      <div className="dark:hidden bg-white absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full w-full" />

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
          <div className="relative w-max flex items-center justify-between gap-x-3">
            <CircleDoodle />
            <div className="font-bold text-2xl md:text-3xl">About Me</div>
          </div>

          <div className="max-w-[500px] text-center">
            My name is Phot Koseekrainiramon. I am a Computer Engineering
            student at the University of New South Wales who loves solving
            problems and building things, especially in web development.
            <br />
            <br /> I enjoy creating user-friendly applications and working with
            both front-end and back-end technologies. I had not only focused on
            my coursework but had also expanded my experience through various
            side projects, hackathon events, and internships throughout my
            academic journey.
          </div>
        </motion.div>

        <motion.div
          className="h-full max-w-[340px] z-10"
          variants={fadeIn("right")}
        >
          <QualificationTab />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
