"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { ExternalLink } from "lucide-react";
import { RiGithubFill } from "react-icons/ri";

import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { showcase1 } from "@/app/data/showcase1";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectShowcase1 = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      className="border rounded-2xl shadow-md py-5 px-1 xs:px-3 sm:px-5 w-auto
      bg-white dark:bg-secondary/40 flex flex-col gap-3"
      ref={ref}
      initial="hidden"
      animate={animation}
    >
      <div className="text-center py-2">
        <h3 className="text-2xl font-bold mx-auto text-center">
          UNSW WAM to GPA Convertor
        </h3>
        <p className="text-xs text-muted-foreground">Aug 2024</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 w-full">
        <div className="flex flex-col sm:flex-row gap-3">
          <div
            className="px-3 py-5 lg:max-w-[370px] text-center flex flex-col gap-y-1
            w-full border rounded-2xl flex-1 justify-center items-center dark:bg-secondary"
          >
            <h5 className="text-lg font-bold">Problem Statement</h5>
            <p className="max-w-[400px] md:max-w-[350px] text-muted-foreground">
              Unlike many other universities that use GPA system, UNSW uses a
              WAM system.
            </p>
            <p className="max-w-[400px] md:max-w-[350px] text-muted-foreground">
              This cause{" "}
              <span className="text-primary">confusion to students</span>{" "}
              including my friends on how to convert their WAM into GPA.
            </p>
          </div>

          <div
            className="px-3 py-5 lg:max-w-[300px] text-center flex flex-col gap-y-1
            w-full border rounded-2xl flex-1 justify-center items-center dark:bg-secondary"
          >
            <h5 className="text-lg font-bold">Solution</h5>
            <div className="max-w-[400px] md:max-w-[300px] text-muted-foreground">
              <p>
                This app I developed not only converting students WAM into GPA,
                it also{" "}
                <span className="text-primary">automates the process</span>{" "}
                making it the most convinent.
              </p>
            </div>
          </div>
        </div>

        <div
          className="px-3 py-5 lg:max-w-[350px] text-center flex flex-col gap-y-1
          mx-auto w-full border rounded-2xl flex-1 justify-center items-center dark:bg-secondary"
        >
          <h5 className="text-lg font-bold">What this does?</h5>
          <p className="max-w-[400px] md:max-w-[450px] text-wrap text-muted-foreground">
            An app that helps UNSW students convert their WAM to GPA by simply
            uploading their academic statement.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div
          className="w-full flex flex-col sm:flex-row md:flex-col items-center sm:items-stretch
          md:items-center gap-3 md:max-w-[350px]"
        >
          <div
            className="px-3 py-5 sm:max-w-[350px] text-center flex flex-col gap-y-1 w-full 
            border rounded-2xl flex-1 justify-center items-center dark:bg-secondary"
          >
            <Link
              href="https://unsw-wam-to-gpa-convertor.vercel.app/"
              passHref
              target="_blank"
            >
              <Image
                src="./covers/wam-to-gpa-cover.webp"
                alt="app demo"
                width={350}
                height={350}
              />
            </Link>
          </div>

          <div
            className="px-3 py-5 text-center flex flex-col gap-y-1 sm:max-w-[700px] lg:max-w-[350px]
            mx-auto w-full border rounded-2xl flex-1 justify-center items-center dark:bg-secondary"
          >
            <h5 className="text-lg font-bold">Tech Stacks</h5>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 max-w-[350px]">
              {showcase1.map((tool, index) => (
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

        <div className="w-full flex flex-col justify-between">
          <div
            className="px-3 py-5 text-center flex flex-col gap-y-3 dark:bg-secondary
            w-full border rounded-2xl flex-1 justify-center items-center"
          >
            <Image
              src="./showcases/analytic-wam-convertor.png"
              alt="analytics graph"
              width={450}
              height={450}
            />

            <div className="flex flex-col text-center">
              <h5 className="text-lg font-bold">Useful for Students</h5>
              <p className="text-muted-foreground">
                More than <span className="text-primary">100 users</span> in{" "}
                <span className="text-primary">a single day</span>
              </p>
            </div>
          </div>

          <div className="self-center flex flex-wrap sm:flex-nowrap gap-1 pt-5 justify-center">
            <div className="flex gap-1">
              <Link
                href="https://github.com/photkosee/unsw-wam-to-gpa-convertor?tab=readme-ov-file#table-of-contents"
                passHref
                target="_blank"
              >
                <Button
                  className="rounded-full px-3 gap-x-1 text-sm"
                  variant="secondary"
                  size="sm"
                >
                  More Details
                </Button>
              </Link>

              <Link
                href="https://unsw-wam-to-gpa-convertor.vercel.app/"
                passHref
                target="_blank"
              >
                <Button
                  className="rounded-full px-3 gap-x-1 text-sm"
                  variant="secondary"
                  size="sm"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Button>
              </Link>
            </div>

            <Link
              href="https://github.com/photkosee/unsw-wam-to-gpa-convertor"
              passHref
              target="_blank"
            >
              <Button
                className="rounded-full px-3 gap-x-1 text-sm"
                variant="secondary"
                size="sm"
              >
                <RiGithubFill size={18} />
                Source Code
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase1;
