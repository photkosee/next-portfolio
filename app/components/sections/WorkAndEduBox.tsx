"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import experiences from "@/app/data/experiences";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Timeline from "@/app/components/sections/Timeline";
import educations from "@/app/data/educations";

const WorkAndEduBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div ref={ref} animate={animation}>
      <div className="hidden lg:grid grid-cols-2 gap-x-5">
        <div className="flex flex-col gap-y-4 h-full">
          <h1 className="font-bold text-2xl md:text-3xl text-center">
            Work Experience
          </h1>
          <Timeline experiences={experiences} />
        </div>

        <div className="flex flex-col gap-y-4 h-full">
          <h1 className="font-bold text-2xl md:text-3xl text-center">
            Education
          </h1>
          <Timeline experiences={educations} />
        </div>
      </div>

      <div className="lg:hidden max-w-xl w-full mx-auto">
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
      </div>
    </motion.div>
  );
};

export default WorkAndEduBox;
