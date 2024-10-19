"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Button } from "@/components/ui/button";

const ContactBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl
      flex flex-col gap-y-5 dark:bg-secondary"
    >
      <h1 className="font-bold text-2xl md:text-3xl text-center w-full">
        Connect with Me
      </h1>

      <div className="flex flex-col gap-y-1 max-w-[400px] mx-auto w-full">
        <div className="flex flex-row lg:flex-col gap-1 xs:gap-x-2">
          <Link
            href="https://github.com/photkosee"
            target="_blank"
            className="w-full"
            passHref
          >
            <Button variant="outline" className="gap-x-2 w-full">
              <RiGithubFill className="w-5 h-5" />
              GitHub
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/photkosee/"
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

        <Link
          href="https://photkosee.medium.com/"
          target="_blank"
          className="w-full"
          passHref
        >
          <Button variant="outline" className="gap-x-2 w-full">
            <FaMedium />
            Medium Blog
          </Button>
        </Link>

        <div className="flex items-center justify-center gap-x-1 py-2">
          <BiLogoGmail className="w-5 h-5 text-red-700 dark:text-white" />
          <div>Email:</div>
          <p>phot.kosee@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactBox;
