"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { SiUml, SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";

import { Project } from "@/app/types";
import { Card, CardHeader } from "@/components/ui/card";
import StackIcon from "tech-stack-icons";
import { Button } from "@/components/ui/button";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { RiGithubFill } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProjectCard = ({
  image,
  name,
  category,
  description,
  link,
  github,
  stack,
  date,
  uml,
  index,
}: Project) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.1,
        ease: "easeInOut",
        duration: 0.35,
      }}
      viewport={{ amount: 0 }}
      className="w-full rounded-lg shadow-lg border px-2 py-2 max-w-[370px] sm:max-w-5xl overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-x-2 gap-y-2 lg:gap-y-1 w-full">
        <div className="hidden lg:flex flex-col gap-2 lg:w-[280px] flex-shrink-0">
          <div
            className="rounded-lg sm:border dark:bg-secondary/40 bg-[#fef5f5]
              px-5 pt-5 h-full flex items-end overflow-hidden justify-center min-h-[220px]"
          >
            <Image
              className="shadow-xl"
              src={image ? image : "./covers/project-cover.webp"}
              width={270}
              height={270}
              alt="project's mockup"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-1 lg:w-[300px] flex-shrink-0">
          <div className="px-3 pb-1 pt-3 lg:p-3 text-center">
            <h4 className="text-2xl font-bold max-w-[400px] mx-auto">{name}</h4>
          </div>

          <div
            className="rounded-lg lg:border lg:max-w-[300px] text-center px-3 pb-2 lg:p-3 h-full
            flex flex-col justify-center"
          >
            <h5 className="font-semibold text-xl hidden lg:block">
              What This Does?
            </h5>
            <p className="text-muted-foreground max-w-[400px] self-center">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-y-2 lg:gap-y-1 gap-x-2">
          <div className="lg:hidden flex flex-col gap-2 lg:w-[280px] flex-shrink-0 flex-1">
            <div
              className="rounded-lg sm:border dark:bg-secondary/40 bg-[#fef5f5]
              px-5 pt-5 h-full flex items-end overflow-hidden justify-center min-h-[220px]"
            >
              <Image
                className="shadow-xl"
                src={image ? image : "./covers/project-cover.webp"}
                width={270}
                height={270}
                alt="project's mockup"
                priority
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-y-2 lg:gap-y-1 flex-1 md:max-w-[427px] sm:w-[300px]
            flex-shrink-0 justify-between"
          >
            <div
              className="rounded-lg sm:border sm:px-2 py-1 lg:p-1 flex flex-col items-center
              gap-y-1 w-full"
            >
              <h5 className="hidden sm:block font-semibold text-xl">
                Tech Stacks
              </h5>
              <div className="flex flex-wrap gap-1 justify-center">
                {stack.map((icon, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="h-7 gap-x-1.5 text-sm flex items-center bg-white"
                  >
                    <div className="text-muted-foreground">{icon}</div>
                    {icon && (
                      <StackIcon
                        name={icon}
                        className="max-h-[17px] h-full max-w-[17px] w-full"
                      />
                    )}
                  </Badge>
                ))}
              </div>

              <div
                className="rounded-lg border w-full p-1 flex gap-x-1 items-center justify-center
                mt-1 bg-white"
              >
                <Calendar size={15} className="text-primary" />
                <p className="text-muted-foreground text-[12px]">{date}</p>
              </div>
            </div>

            <div className="flex flex-col items-center self-end w-full gap-1 mt-3 xs:mt-1">
              <div className="flex w-full gap-1">
                <Link href={github} passHref target="_blank" className="flex-1">
                  <Button
                    variant="outline"
                    className="gap-1 text-sm px-3 bg-secondary text-white hover:bg-secondary/90
                    hover:text-white w-full rounded-lg"
                    size="sm"
                  >
                    More Details
                  </Button>
                </Link>

                <Link
                  href="https://github.com/photkosee/unsw-wam-to-gpa-convertor"
                  passHref
                  target="_blank"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="gap-1 text-sm px-3 bg-secondary text-white hover:bg-secondary/90
                    hover:text-white w-full rounded-lg"
                    size="sm"
                  >
                    Source Code
                    <RiGithubFill size={18} />
                  </Button>
                </Link>
              </div>

              {link && (
                <Link href={link} passHref target="_blank" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-sm gap-1 px-3 bg-secondary text-white hover:bg-secondary/90
                    hover:text-white rounded-lg"
                    size="sm"
                  >
                    Live Demo
                    <HiGlobeAsiaAustralia size={18} />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
