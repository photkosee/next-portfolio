"use client";

import Link from "next/link";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiLogoGmail } from "react-icons/bi";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 50,
      });
    }
    if (inView2) {
      animation2.start({
        opacity: 1,
        y: 0,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
        },
      });
    }
    if (!inView2) {
      animation2.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView, inView2]);

  return (
    <section
      className="relative flex justify-center py-[70px] dark:bg-secondary/40 bg-white"
      id="contact"
    >
      <div
        className="dark:hidden bg-white absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full
        w-full dark:bg-secondary/40"
      />

      <div className="px-1 xs:px-3 sm:px-5">
        <div className="flex flex-col items-center gap-y-7">
          <motion.h2
            className="h2 max-w-xl text-center"
            ref={ref}
            animate={animation}
          >
            Would you like to work together? I&rsquo;m here to discuss.
          </motion.h2>

          <motion.div
            ref={ref2}
            animate={animation2}
            className="h-full w-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl flex flex-col gap-y-5"
          >
            <h1 className="font-bold text-2xl md:text-3xl text-center w-full">
              Contact Me
            </h1>

            <div className="flex flex-col gap-y-5 max-w-[400px] mx-auto w-full">
              <div className="flex items-center justify-center gap-x-2">
                <BiLogoGmail className="w-5 h-5 text-red-700 dark:text-white" />
                <div className="select-none">Email:</div>
                <p>phot.kosee@gmail.com</p>
              </div>

              <Link
                href="https://www.linkedin.com/in/phot-kosee/"
                target="_blank"
                className="w-full"
                passHref
              >
                <Button variant="outline" className="gap-x-2 w-full">
                  <RiLinkedinBoxFill className="w-5 h-5 text-blue-700 dark:text-white" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
