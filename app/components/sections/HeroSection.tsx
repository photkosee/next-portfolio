"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import Socials from "@/app/components/headers/Socials";
import WavyPattern from "@/app/components/WavyPattern";
import RotatingGeometric from "@/app/components/RotatingGeometric";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeroSection = () => {
  return (
    <section
      className="relative bg-[#fef5f5] dark:bg-transparent h-[calc(100vh-70px)]
      flex justify-center items-center"
    >
      <WavyPattern />

      <div className="absolute w-full h-[calc(100vh-72px)] top-0 overflow-hidden">
        <RotatingGeometric />
      </div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.2,
          ease: "easeInOut",
          duration: 0.4,
        }}
        viewport={{ amount: 0 }}
        className="flex flex-col md:flex-row-reverse justify-center items-center
        gap-x-10 gap-y-3 z-20"
      >
        <div className="flex flex-col max-w-[380px] items-start">
          <div>
            <div
              className="text-[10px] sm:text-sm uppercase font-semibold mb-2 text-primary
              tracking-[3px] flex items-center gap-x-2 justify-start"
            >
              <span className="hidden md:block w-5 h-[2px] bg-primary rounded-lg" />
              Software Engineer
            </div>

            <h1 className="text-big text-left flex flex-col items-start">
              Hi there,
              <div className="flex gap-x-2 items-center">
                my name is
                <span className="text-primary">Phot</span>
              </div>
            </h1>
            <p
              className="my-3 text-left text-muted-foreground font-light
              text-sm md:text-[16px] md:leading-[24px]"
            >
              I love to build things that can help people.
            </p>
          </div>

          <Socials
            containerStyles="flex md:hidden justify-center items-center gap-x-5"
            iconsStyles="text-[23px] hover:text-primary"
          />

          <div className="flex lex-row gap-x-2 sm:gap-x-3 mt-4">
            <Link href="/contact" passHref>
              <Button className="rounded-full gap-x-2">
                Contact Me
                <RiMailSendLine size={18} />
              </Button>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1eoG9BnPtlf0KuHi5qaWLnynE6uvwbS1f/view?usp=sharing"
              target="_blank"
              passHref
            >
              <Button className="rounded-full gap-x-1" variant="secondary">
                Resume
                <IoDocumentTextOutline size={19} />
              </Button>
            </Link>
          </div>
        </div>

        <Socials
          containerStyles="hidden md:flex justify-center items-center
          gap-x-5 md:flex-col md:gap-y-5"
          iconsStyles="text-[27px] hover:text-primary"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
