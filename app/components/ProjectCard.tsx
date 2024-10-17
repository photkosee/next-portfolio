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
import { RiGithubFill } from "react-icons/ri";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";

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
        delay: index * 0.065,
        ease: "easeInOut",
        duration: 0.35,
      }}
      viewport={{ amount: 0 }}
    >
      <Card className="max-w-[300px] relative flex flex-col">
        <CardHeader className="p-0">
          <div
            className="
            relative w-full h-[170px] sm:h-[200px] flex items-center justify-center
            dark:bg-secondary/40 bg-[#fef5f5] overflow-hidden
            "
          >
            <Image
              className="absolute bottom-0 shadow-xl w-[200px] h-[150px]"
              src={image ? image : "./covers/project-cover.webp"}
              width={200}
              height={150}
              alt="project's mockup"
              priority
            />
          </div>
        </CardHeader>

        <div className="flex flex-col justify-between gap-y-1">
          <div className="px-4 py-2 sm:py-3 flex flex-col gap-2">
            <h4 className="h4">{name}</h4>
            <p className="text-muted-foreground text-[13.5px] sm:text-[15px] leading-[17px]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center w-full gap-1 px-2 pb-2">
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

        <div className="absolute top-3 right-2">
          <div className="flex flex-col gap-2.5 items-center">
            {stack.map((icon, index) => (
              <StackIcon name={icon} key={index} className="w-5" />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
