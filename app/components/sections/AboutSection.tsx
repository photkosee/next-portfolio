"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import StackIcon from "tech-stack-icons";

import experiences from "@/app/data/experiences";
import educations from "@/app/data/educations";
import stacks from "@/app/data/stacks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import AboutMeBox from "@/app/components/sections/AboutMeBox";

const AboutSection = () => {
  const { ref: ref2, animation: animation2 } = useAnimateOnView();
  const { ref: ref3, animation: animation3 } = useAnimateOnView();
  const { ref: ref4, animation: animation4 } = useAnimateOnView();
  const { ref: ref5, animation: animation5 } = useAnimateOnView();
  const { ref: ref6, animation: animation6 } = useAnimateOnView();

  return (
    <section className="w-full h-auto bg-white relative pt-[70px] pb-[140px] dark:bg-secondary/40">
      <div
        className="dark:hidden bg-white absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full
        w-full dark:bg-secondary/40"
      />

      <div className="max-w-5xl mx-auto px-1 xs:px-3 sm:px-5 flex flex-col gap-y-5">
        <AboutMeBox />

        <div className="flex flex-col lg:flex-row gap-5 max-w-[650px] lg:max-w-none mx-auto">
          <div className="flex-1 flex flex-col gap-y-5">
            <motion.div
              ref={ref2}
              animate={animation2}
              className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl flex flex-col gap-y-5"
            >
              <h1 className="font-bold text-2xl md:text-3xl text-center">
                Work Experience
              </h1>

              <div className="mx-auto max-w-[450px]">
                {experiences.map((experience, index) => (
                  <div className="flex gap-x-5 group" key={index}>
                    <div
                      className="w-[55px] h-[55px] flex items-center justify-center
                      flex-shrink-0 pt-3"
                    >
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        className={`${
                          experience.size
                            ? experience.size
                            : "w-[55px] h-[55px]"
                        } object-scale-down`}
                        width={0}
                        height={0}
                        priority
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="text-base font-medium">
                        {experience.years}
                      </div>
                      <div className="font-semibold text-lg leading-none mb-2">
                        {experience.company}
                      </div>
                      <div className="text-sm leading-none mb-2 font-semibold">
                        {experience.role}
                      </div>
                      <div className="text-sm leading-[18px] text-muted-foreground mb-5">
                        {experience.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              animate={animation3}
              className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl hidden lg:flex flex-col gap-y-5"
            >
              <h1 className="font-bold text-2xl md:text-3xl text-center w-full">
                Connect with Me
              </h1>

              <div className="flex flex-col gap-y-1 max-w-[400px] mx-auto w-full">
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
                  <div className="select-none">Email:</div>
                  <p>phot.kosee@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col gap-y-5">
            <motion.div
              ref={ref4}
              animate={animation4}
              className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl flex flex-col
              gap-y-5 justify-center"
            >
              <h1 className="font-bold text-2xl md:text-3xl text-center">
                Education
              </h1>
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
                      <div className="text-base font-medium">
                        {education.years}
                      </div>
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

            <motion.div
              ref={ref5}
              animate={animation5}
              className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl flex flex-col gap-y-5"
            >
              <h1 className="font-bold text-2xl md:text-3xl text-center">
                Tech Stacks
              </h1>
              <div>
                {stacks.map((stack, index) => (
                  <div key={index}>
                    <div className="flex flex-col w-full gap-3">
                      <div className="flex gap-3 items-center w-full">
                        <div className="w-full h-[1px] bg-neutral-300 dark:bg-slate-500 flex-1" />
                        <div className="font-semibold text-lg leading-none">
                          {stack.skill}
                        </div>
                        <div className="w-full h-[1px] bg-neutral-300 dark:bg-slate-500 flex-1" />
                      </div>
                      <div className="mb-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                        {stack.tools.map((tool, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="h-7 gap-x-1.5 text-sm flex items-center"
                          >
                            <div>{tool.name}</div>
                            {tool.icon && (
                              <StackIcon
                                name={tool.icon}
                                className="max-h-[17px] h-full max-w-[17px] w-full"
                              />
                            )}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={ref6}
            animate={animation6}
            className="h-full border shadow-md py-5 px-3 sm:px-5 rounded-3xl flex lg:hidden flex-col gap-y-5"
            aria-hidden
          >
            <h1 className="font-bold text-2xl md:text-3xl text-center w-full">
              Connect with Me
            </h1>

            <div className="flex flex-col gap-y-2 max-w-[400px] mx-auto w-full">
              <div className="flex gap-x-1 xs:gap-x-2">
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
                <div className="select-none">Email:</div>
                <p>phot.kosee@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
