"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "@/app/styles/tama.css";
import experiences from "@/app/data/experiences";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Timeline from "@/app/components/sections/Timeline";
import educations from "@/app/data/educations";

const WorkAndEduBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();
  const { ref: ref2, animation: animation2 } = useAnimateOnView();
  const { ref: ref3, animation: animation3 } = useAnimateOnView();
  const { ref: ref4, animation: animation4 } = useAnimateOnView();
  const { ref: ref5, animation: animation5 } = useAnimateOnView();
  const [counter, setCounter] = useState(1);
  const [delay, setDelay] = useState(2200);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter % 2 === 0) {
        setDelay(1500);
      } else {
        setDelay(1000);
      }
      setCounter((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [counter, delay]);

  return (
    <div>
      <div className="hidden lg:grid grid-cols-2 gap-x-5">
        <div className="flex flex-col gap-y-4 h-full">
          <motion.h1
            ref={ref}
            animate={animation}
            initial="hidden"
            className="font-bold text-2xl md:text-3xl text-center"
          >
            Work Experience
          </motion.h1>
          <motion.div
            ref={ref2}
            animate={animation2}
            initial="hidden"
            className="h-full"
          >
            <Timeline experiences={experiences} />
          </motion.div>
        </div>

        <div className="flex flex-col gap-y-4 h-full">
          <motion.h1
            ref={ref3}
            animate={animation3}
            initial="hidden"
            className="font-bold text-2xl md:text-3xl text-center"
          >
            Education
          </motion.h1>
          <motion.div
            ref={ref4}
            animate={animation4}
            initial="hidden"
            className="h-full relative"
          >
            <Timeline experiences={educations} />
            <div className="absolute bottom-[135px] right-[100px]">
              {counter % 2 === 0 ? (
                <div className="tama2" />
              ) : (
                <div className="tama" />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={ref5}
        animate={animation5}
        initial="hidden"
        className="lg:hidden max-w-xl w-full mx-auto"
      >
        <Tabs defaultValue="work" className="w-full">
          <TabsList
            className="gap-2 grid grid-cols-2 p-0.5 mx-auto
            text-muted-foreground rounded-full dark:sm:bg-secondary
            bg-transparent sm:bg-white dark:bg-transparent
            border-solid border mb-3"
          >
            <TabsTrigger
              value="work"
              className="font-semibold text-base xs:text-xl text-center rounded-full py-1
              data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="font-semibold text-base xs:text-xl text-center rounded-full py-1
              data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="w-full">
            <Timeline experiences={experiences} />
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <Timeline experiences={educations} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default WorkAndEduBox;
