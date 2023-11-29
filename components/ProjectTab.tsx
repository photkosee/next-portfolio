"use client";

import { useState } from "react";

import { Briefcase, Layers, School } from "lucide-react";

import { projects } from "@/components/storage";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const ProjectTab = () => {
  const [category, setCategory] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    return category === "all"
      ? project
      : category === project.category;
  });

  return (
    <Tabs defaultValue={category}>
      <TabsList className="
        grid sm:grid-cols-4 py-0 gap-1 sm:gap-2 mx-auto
        text-muted-foreground rounded-full dark:sm:bg-secondary
        border-none bg-transparent sm:bg-white dark:bg-transparent
        sm:border-solid sm:border max-w-md
        "
      >
        <TabsTrigger className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white 
          "
          value="all"
          onClick={() => setCategory("all")}
        >
          All
        </TabsTrigger>

        <TabsTrigger className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="frontend"
          onClick={() => setCategory("frontend")}
        >
          Frontend
        </TabsTrigger>

        <TabsTrigger className="
          w-36 sm:w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="backend"
          onClick={() => setCategory("backend")}
        >
          Backend
        </TabsTrigger>

        <TabsTrigger className="
          w-36 sm:w-[105px] rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="others"
          onClick={() => setCategory("others")}
        >
          Others
        </TabsTrigger>
      </TabsList>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-28 sm:mt-3">
        {filteredProjects.map((project, index) => (
          <TabsContent value={category} key={index} className="flex justify-center">
            <ProjectCard image={""} category={""} name={""} description={""} link={""} github={""} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default ProjectTab;
