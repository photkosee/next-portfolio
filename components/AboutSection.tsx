"use client";

import { Variants, motion } from "framer-motion";
import { GraduationCap, Laugh, MailIcon, User2 } from "lucide-react";

import CircleDoodle from "@/components/CircleDoodle";
import QualificationTab from "@/components/QualificationTab";

const infoDatas = [
  {
    icon: <User2 size={18} />,
    description: "My name is Phot Koseekrainiramon",
  },
  {
    icon: <Laugh size={18} />,
    description: "People also call me Pete/Peach",
  },
  {
    icon: <MailIcon size={18} />,
    description: "kosee.phot@gmail.com",
  },
  {
    icon: <GraduationCap size={18} />,
    description: "Bachelor in Computer Engineering",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full h-[84vh]">
      <motion.div className="
        container mx-auto flex flex-col w-full h-full lg:flex-row lg:justify-around
        gap-y-3 items-center lg:items-start pt-48 md:pt-[230px] lg:pt-24
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
              About me
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

        <motion.div className="h-full max-w-[340px]">
          <QualificationTab />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
