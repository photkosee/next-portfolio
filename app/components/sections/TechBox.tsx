"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

import stacks from "@/app/data/stacks";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const TechBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();
  const { ref: ref2, animation: animation2 } = useAnimateOnView();

  return (
    <div className="flex flex-col gap-y-4">
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={animation}
        className="font-bold text-2xl md:text-3xl text-center"
      >
        Tech Stacks
      </motion.h1>

      <motion.div ref={ref2} initial="hidden" animate={animation2}>
        <Card>
          <CardContent className="pt-5">
            <div className="flex flex-col gap-y-7">
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
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
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
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default TechBox;
