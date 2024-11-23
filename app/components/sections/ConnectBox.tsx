"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import "@/app/styles/dino.css";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ConnectBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();
  const { ref: ref2, animation: animation2 } = useAnimateOnView();
  const [jump, setJump] = useState(false);

  return (
    <div className="flex flex-col gap-y-4 h-full">
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={animation}
        className="font-bold text-2xl md:text-3xl text-center w-full"
      >
        Connect with Me
      </motion.h1>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={animation2}
        className="h-full"
      >
        <Card
          className="h-full"
          onClick={() => {
            if (jump) return;
            setJump(true);

            setTimeout(() => {
              setJump(false);
            }, 700);
          }}
          aria-disabled
        >
          <CardContent className="h-full flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-1 sm:gap-y-1 mx-auto w-full pt-5">
              <div className="flex flex-row lg:flex-col gap-1">
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

              <div className="flex items-center justify-center gap-x-1 pt-2">
                <BiLogoGmail className="w-5 h-5 text-red-700 dark:text-white" />
                <div>Email:</div>
                <p>phot.kosee@gmail.com</p>
              </div>
            </div>

            <div className="relative h-full flex items-end w-full min-h-[100px]">
              <div className="relative animate-mini-infinite-scroll sm:animate-infinite-scroll w-full">
                <div
                  id="dino"
                  className={`h-10 w-10 -bottom-1 left-0 absolute ${
                    jump ? "animate-jump" : ""
                  }`}
                />
              </div>

              <div className="w-full h-[1px] bg-black dark:bg-white absolute bottom-5" />
              <div className="w-[5px] h-[1px] bg-black dark:bg-white absolute bottom-4 left-0" />
              <div className="w-[9px] h-[1px] bg-black dark:bg-white absolute bottom-4 left-[20px]" />
              <div className="w-[15px] h-[1px] bg-black dark:bg-white absolute bottom-4 left-[150px]" />
              <div className="w-[7px] h-[1px] bg-black dark:bg-white absolute bottom-4 left-[170px]" />
              <div className="w-[5px] h-[1px] bg-black dark:bg-white absolute bottom-4 xs:left-[277px]" />
              <div className="w-[17px] h-[1px] bg-black dark:bg-white absolute bottom-4 sm:left-[377px]" />
              <div className="w-[3px] h-[1px] bg-black dark:bg-white absolute bottom-4 sm:left-[400px]" />
              <div className="w-[9px] h-[1px] bg-black dark:bg-white absolute bottom-4 right-[27px]" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ConnectBox;
