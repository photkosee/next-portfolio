import { Briefcase, Layers, School } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

const educations = [
  {
    school: "The University of New South Wales",
    stream: "Bachelor of Computer Engineering",
    years: "2022 - 2024",
  },
  {
    school: "Thammasat University",
    stream: "Bachelor of Electrical Engineering",
    years: "2019 - 2021",
  },
];

const experiences = [
  {
    company: "Cloud Natician",
    role: "Software Engineer",
    years: "2023 - Present",
  },
  {
    company: "UNSW Computer Sceience and Engineering",
    role: "Casual Academic",
    years: "2023 - 2023",
  },
];

const stacks = [
  {
    skill: "Frontend",
    tools: "React, HTML, CSS, JavaScript, TypeScript, Bootstrap, MUI, Tailwind CSS, Next.js",
  },
  {
    skill: "Backend",
    tools: "Node.js, Python, Java, C, Express, Flask, Django",
  },
  {
    skill: "Database",
    tools: "PostgreSQL, MySQL",
  },
  {
    skill: "Others",
    tools: "Wireshark, GitLab, GitHub",
  },
  {
    skill: "Learning",
    tools: "Go, Docker, Kubernetes, Shadcn ui",
  },
];

const QualificationTab = () => {
  return (
    <Tabs defaultValue="educations">
      <TabsList className="
        grid sm:grid-cols-3 p-1 gap-1 sm:gap-11 lg:gap-2
        text-muted-foreground rounded-full dark:sm:bg-secondary
        border-none sm:border bg-white dark:bg-transparent
        "
      >
        <TabsTrigger className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white 
          "
          value="experiences"
        >
          Experiences
        </TabsTrigger>

        <TabsTrigger className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="educations"
        >
          Educations
        </TabsTrigger>

        <TabsTrigger className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="skills"
        >
          Skills
        </TabsTrigger>
      </TabsList>
      
      <div className="text-lg mt-20 sm:mt-0">
        <TabsContent value="experiences">
        <div className="
            flex items-center gap-x-3 text-primary
            justify-center lg:justify-start
            "
          >
            <h3 className="h3 my-5">
              My Experiences
            </h3>
            <Briefcase size={25} />
          </div>

          <div>
            {experiences.map((experience, index) => (
              <div className="flex gap-x-7 group" key={index}>
                <div className="h-[70px] w-[1px] bg-border relative ml-3 mt-1">
                  <div className="
                    w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                    group-hover:translate-y-[65px] translate-all duration-500
                    "
                  />
                </div>
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
          <div className="
            flex items-center gap-x-3 text-primary
            justify-center lg:justify-start
            "
          >
            <h3 className="h3 my-5">
              My Education
            </h3>
            <School size={27} />
          </div>

          <div>
            {educations.map((education, index) => (
              <div className="flex gap-x-7 group" key={index}>
                <div className="h-[70px] w-[1px] bg-border relative ml-3 mt-1">
                  <div className="
                    w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                    group-hover:translate-y-[65px] translate-all duration-500
                    "
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-medium">
                    {education.years}
                  </div>
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
          <div className="
            flex items-center gap-x-3 text-primary
            justify-center lg:justify-start
            "
          >
            <h3 className="h3 my-5">
              My Stacks
            </h3>
            <Layers size={27} />
          </div>

          <div>
            {stacks.map((stack, index) => (
              <div className="flex gap-x-7 group" key={index}>
                <div className="h-[50px] w-[1px] bg-border relative ml-3">
                  <div className="
                    w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                    group-hover:translate-y-[40px] translate-all duration-500
                    "
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg leading-none mb-2">
                    {stack.skill}
                  </div>
                  <div className="text-sm leading-none text-muted-foreground mb-7">
                    {stack.tools}
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
