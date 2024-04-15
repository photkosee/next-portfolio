import Image from "next/image";

import { Briefcase, Layers, School } from "lucide-react";
import StackIcon from "tech-stack-icons";

import { experiences, educations, stacks } from "@/components/storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const QualificationTab = () => {
  return (
    <Tabs defaultValue="educations">
      <TabsList
        className="
        grid sm:grid-cols-3 py-0 gap-1 sm:gap-2
        text-muted-foreground rounded-full dark:sm:bg-secondary
        border-none bg-transparent dark:bg-transparent
        sm:border-solid sm:border
        "
      >
        <TabsTrigger
          className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white 
          "
          value="experiences"
        >
          Experience
        </TabsTrigger>

        <TabsTrigger
          className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="educations"
        >
          Education
        </TabsTrigger>

        <TabsTrigger
          className="
          w-36 sm:w-[105px] rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="skills"
        >
          Skills
        </TabsTrigger>
      </TabsList>

      <div className="text-lg mt-20 sm:mt-0">
        <TabsContent value="experiences">
          <div
            className="
            flex items-center gap-x-3 dark:text-white
            justify-center lg:justify-start mb-5 sm:my-5
            "
          >
            <h3 className="h3">My Experience</h3>
            <Briefcase size={25} />
          </div>

          <div>
            {experiences.map((experience, index) => (
              <div className="flex gap-x-5 group" key={index}>
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="w-[55px] h-[55px] mt-2 object-scale-down"
                  width={55}
                  height={55}
                  priority
                />
                <div className="flex flex-col">
                  <div className="text-base font-medium">
                    {experience.years}
                  </div>
                  <div className="font-semibold text-lg leading-none mb-2">
                    {experience.company}
                  </div>
                  <div className="text-sm leading-none text-muted-foreground mb-5">
                    {experience.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="educations">
          <div
            className="
            flex items-center gap-x-3 dark:text-white
            justify-center lg:justify-start mb-5 sm:my-5
            "
          >
            <h3 className="h3">My Education</h3>
            <School size={27} />
          </div>

          <div>
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
                  <div className="text-base font-medium">{education.years}</div>
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
        </TabsContent>

        <TabsContent value="skills">
          <div
            className="
            flex items-center gap-x-3 dark:text-white
            justify-center lg:justify-start mb-5 sm:my-5
            "
          >
            <h3 className="h3">My Stacks</h3>
            <Layers size={27} />
          </div>

          <div className="flex flex-col">
            {stacks.map((stack, index) => (
              <div className="flex group" key={index}>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-3 items-center w-full">
                    <div className="w-full h-[1px] bg-neutral-300 dark:bg-slate-500 lg:hidden flex-1" />
                    <div className="font-semibold text-lg leading-none">
                      {stack.skill}
                    </div>
                    <div className="w-full h-[1px] bg-neutral-300 dark:bg-slate-500 flex-1" />
                  </div>
                  <div
                    className="
                    mb-7 flex flex-wrap items-center justify-center lg:justify-start
                    gap-x-2 gap-y-1
                    "
                  >
                    {stack.tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="h-7 gap-x-1.5 text-sm bg-white text-black flex items-center"
                      >
                        <div>{tool.name}</div>
                        {tool.icon && (
                          <StackIcon name={tool.icon} className="h-[17px]" />
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default QualificationTab;
