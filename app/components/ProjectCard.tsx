"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";
import StackIcon from "tech-stack-icons";

import { Project } from "@/app/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

interface ProjectCardProps {
  image?: string;
  name: string;
  description: string;
  link?: string;
  github: string;
  stack: Project["stack"];
  date: string;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProjectCard = ({
  image,
  name,
  description,
  link,
  github,
  stack,
  date,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.07,
        ease: "easeInOut",
        duration: 0.35,
      }}
      viewport={{ amount: 0 }}
      className="h-full relative select-none"
    >
      <Card className="max-w-[320px] relative h-full flex flex-col justify-between">
        <Link
          href={link ? link : github}
          target="_blank"
          className="relative w-full h-[200px] flex items-center justify-center
          dark:bg-secondary/40 bg-[#fef5f5] overflow-hidden group"
        >
          <div className="absolute top-4 right-2">
            <div className="flex flex-col gap-2.5 items-center">
              {stack.map((icon, index) => (
                <StackIcon name={icon} key={index} className="w-5" />
              ))}
            </div>
          </div>

          <Image
            className={`absolute bottom-0 shadow-xl transition-all ${
              image ? "w-[200px] h-[150px]" : "w-[235px] h-[130px]"
            } group-hover:scale-105 group-hover:-translate-y-1`}
            src={image ? image : "./covers/project-cover.webp"}
            width={image ? 200 : 235}
            height={image ? 150 : 130}
            alt="project's mockup"
            priority
          />
        </Link>

        <div className="px-4 pb-2 sm:pb-3 pt-3 flex flex-col gap-2">
          <div className="flex flex-col gap-y-0.5">
            <h4 className="h4">{name}</h4>
            <p className="text-muted-foreground text-xs font-normal">{date}</p>
          </div>
          <p className="text-muted-foreground text-[13.5px] sm:text-[15px] leading-[17px]">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-center w-full gap-1 p-2">
          <div className="flex w-full gap-1">
            <Link href={github} passHref target="_blank" className="flex-1">
              <Button
                variant="outline"
                className="gap-1 text-sm px-3 w-full"
                size="sm"
              >
                More Details
              </Button>
            </Link>

            {link && (
              <Link href={link} passHref target="_blank" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-sm gap-1 px-3"
                  size="sm"
                >
                  <SquareArrowOutUpRight size={18} />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>

          <Link
            href={github.split("?")[0]}
            passHref
            target="_blank"
            className="w-full"
          >
            <Button
              variant="outline"
              className="gap-1 text-sm px-3 w-full"
              size="sm"
            >
              <RiGithubFill size={18} />
              Source Code
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
