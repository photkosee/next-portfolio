"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { SiUml, SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";

import { Project } from "@/components/types";
import { Card, CardHeader } from "@/components/ui/card";
import StackIcon from "tech-stack-icons";

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
      <Card className="w-[300px] sm:max-w-[370px] relative group select-none">
        <CardHeader className="p-0">
          <div
            className="
            relative w-full h-[170px] sm:h-[200px] flex items-center justify-center
            dark:bg-secondary/40 bg-[#fef5f5] overflow-hidden
            "
          >
            <Image
              className="absolute bottom-0 shadow-xl animate-fadein w-[200px] h-[150px] object-cover"
              src={image ? image : "./images/project-cover.webp"}
              width={0}
              height={0}
              alt="project's mockup"
              priority
            />

            <div
              className="
              bg-black opacity-0 group-hover:opacity-90 absolute inset-0 rounded-t-md
              scale-0 group-hover:scale-100 transition-all duration-100 z-10
              "
            />

            <div className="flex gap-5">
              {link && (
                <Link
                  className="
                  bg-secondary w-[50px] h-[50px] rounded-full
                  flex justify-center items-center
                  scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100
                  transition-all duration-400 z-10
                  "
                  href={link}
                  target="_blank"
                >
                  <TbExternalLink className="text-white" size={24} />
                </Link>
              )}

              {uml && (
                <Link
                  className="
                  bg-secondary w-[50px] h-[50px] rounded-full
                  flex justify-center items-center
                  scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100
                  transition-all duration-400 z-10
                  "
                  href={uml}
                  target="_blank"
                >
                  <SiUml className="text-white" size={23} />
                </Link>
              )}

              <Link
                className="
                bg-secondary w-[50px] h-[50px] rounded-full
                flex justify-center items-center
                scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100
                transition-all duration-300 z-10
                "
                href={github}
                target="_blank"
              >
                <SiGithub className="text-white" size={24} />
              </Link>
            </div>
          </div>
        </CardHeader>

        <div className="h-[180px] px-5 py-2 sm:py-3 flex flex-col gap-2 xs:gap-3">
          <h4 className="h4">{name}</h4>
          <p
            className="
            text-muted-foreground text-[13.5px] sm:text-[15px] leading-[17px]
            "
          >
            {description}
          </p>
        </div>

        <div className="absolute top-3 right-2">
          <div className="flex flex-col gap-2.5 items-center">
            {stack.map((icon, index) => (
              <StackIcon name={icon} key={index} className="w-5" />
            ))}
          </div>
        </div>

        <div className="absolute left-3 bottom-1 flex gap-1 items-center">
          <Calendar size={15} className="text-primary" />
          <p className="text-muted-foreground text-[12px]">{date}</p>
        </div>

        <div
          className="
          absolute right-1 bottom-1 bg-primary text-white
          px-2 rounded-t-[20px] rounded-bl-[20px] rounded-br-[9px]
          "
        >
          {category}
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
