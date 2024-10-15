"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket } from "lucide-react";
import { RiGithubFill } from "react-icons/ri";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import StackIcon from "tech-stack-icons";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { showcase1 } from "@/app/data/showcase1";

const ProjectSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
          delay: 0.1,
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
        y: 0,
        opacity: 1,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
          delay: 0.1,
        },
      });
    }
    if (!inView2) {
      animation2.start({
        opacity: 0,
        y: 50,
      });
    }
    if (inView3) {
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
          delay: 0.1,
        },
      });
    }
    if (!inView3) {
      animation3.start({
        opacity: 0,
        y: 50,
      });
    }
    if (inView4) {
      animation4.start({
        y: 0,
        opacity: 1,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
          delay: 0.1,
        },
      });
    }
    if (!inView4) {
      animation4.start({
        opacity: 0,
        y: 50,
      });
    }
    if (inView5) {
      animation5.start({
        y: 0,
        opacity: 1,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
          delay: 0.1,
        },
      });
    }
    if (!inView5) {
      animation5.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView, inView2, inView3, inView4, inView5]);

  return (
    <section className="flex items-center h-auto relative pt-[70px] pb-[140px] bg-[#fef5f5] dark:bg-transparent">
      <div
        className="dark:hidden bg-[#fef5f5] absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full
        w-full dark:bg-transparent"
      />

      <div className="max-w-5xl px-1 xs:px-3 sm:px-5 mx-auto w-full flex flex-col gap-y-10">
        <div className="w-full flex flex-col gap-y-5">
          <motion.h1
            className="font-bold text-3xl md:text-4xl text-center"
            ref={ref}
            initial="hidden"
            animate={animation}
          >
            Personal Projects
          </motion.h1>

          <motion.div
            className="mx-auto"
            ref={ref2}
            initial="hidden"
            animate={animation2}
          >
            <Link href="/projects" passHref>
              <Button className="rounded-full gap-3">
                View All Projects
                <Rocket size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-y-5">
          <motion.div
            className="border rounded-2xl shadow-md py-5 px-1 xs:px-3 sm:px-5 w-auto bg-white dark:bg-transparent
            flex flex-col gap-3"
            ref={ref3}
            initial="hidden"
            animate={animation3}
          >
            <h3 className="text-2xl font-bold mx-auto text-center py-2">
              UNSW WAM to GPA Convertor
            </h3>
            <div className="flex flex-col lg:flex-row gap-3 w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <div
                  className="px-3 py-5 lg:max-w-[370px] text-center flex flex-col gap-y-1
                  w-full border rounded-2xl shadow-md flex-1 justify-center items-center"
                >
                  <h5 className="text-lg font-bold">Problem Statement</h5>
                  <p className="max-w-[400px] md:max-w-[350px]">
                    Unlike many other universities that use GPA system, UNSW
                    uses a WAM system.
                  </p>
                  <p className="max-w-[400px] md:max-w-[350px]">
                    This cause{" "}
                    <span className="text-primary">confusion to students</span>{" "}
                    including my friends on how to convert their WAM into GPA.
                  </p>
                </div>

                <div
                  className="px-3 py-5 lg:max-w-[300px] text-center flex flex-col gap-y-1
                  w-full border rounded-2xl shadow-md flex-1 justify-center items-center"
                >
                  <h5 className="text-lg font-bold">Solution</h5>
                  <div className="max-w-[400px] md:max-w-[300px]">
                    <p>
                      This app I developed not only converting students WAM into
                      GPA, it also{" "}
                      <span className="text-primary">
                        automates the process
                      </span>{" "}
                      making it the most convinent.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="px-3 py-5 lg:max-w-[350px] text-center flex flex-col gap-y-1
                mx-auto w-full border rounded-2xl shadow-md flex-1 justify-center items-center"
              >
                <h5 className="text-lg font-bold">What this does?</h5>
                <p className="max-w-[400px] md:max-w-[450px] text-wrap">
                  An app that helps UNSW students convert their WAM to GPA by
                  simply uploading their academic statement.
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
                  border rounded-2xl shadow-md flex-1 justify-center items-center"
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
                  mx-auto w-full border rounded-2xl shadow-md flex-1 justify-center items-center"
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
                  className="px-3 py-5 text-center flex flex-col gap-y-3 max-h-[370px]
                  w-full border rounded-2xl shadow-md flex-1 justify-center items-center"
                >
                  <Image
                    src="./showcases/analytic-wam-convertor.png"
                    alt="analytics graph"
                    width={450}
                    height={450}
                  />

                  <div className="flex flex-col text-center">
                    <h5 className="text-lg font-bold">Useful for Students</h5>
                    <p>
                      More than <span className="text-primary">100 users</span>{" "}
                      in <span className="text-primary">a single day</span>
                    </p>
                  </div>
                </div>

                <div className="self-center lg:self-end flex gap-2 pt-5 flex-wrap justify-center">
                  <Link
                    href="https://github.com/photkosee/unsw-wam-to-gpa-convertor?tab=readme-ov-file#table-of-contents"
                    passHref
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      className="px-3 bg-secondary text-white hover:bg-secondary hover:text-white"
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
                      variant="outline"
                      className="gap-1 px-3 bg-secondary text-white hover:bg-secondary hover:text-white"
                      size="sm"
                    >
                      Live Demo
                      <HiGlobeAsiaAustralia size={18} />
                    </Button>
                  </Link>

                  <Link
                    href="https://github.com/photkosee/unsw-wam-to-gpa-convertor"
                    passHref
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      className="gap-1 px-3 bg-secondary text-white hover:bg-secondary hover:text-white"
                      size="sm"
                    >
                      Source Code
                      <RiGithubFill size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto"
          ref={ref5}
          initial="hidden"
          animate={animation5}
        >
          <Link href="/projects" passHref>
            <Button className="rounded-full">View More Projects</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
