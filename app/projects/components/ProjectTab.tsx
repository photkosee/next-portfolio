"use client";

import { useState } from "react";

import projects from "@/app/data/projects";
import { Project } from "@/app/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/app/components/ProjectCard";

const filterByCategory = (projects: Project[], category: string) => {
  return projects.filter((project: Project) => {
    if (category === "highlight") return project.show;
    if (category === "others") return project.category === "others";
    if (category === "backend")
      return project.category === "backend" || project.category === "fullstack";
    if (category === "frontend")
      return (
        project.category === "frontend" || project.category === "fullstack"
      );
    if (category === "all") return true;
  });
};

const ProjectTab = () => {
  const [category, setCategory] = useState<string>("highlight");
  const [numShown, setNumShown] = useState(6);
  const numAll = projects.length;
  const numHighlight = filterByCategory(projects, "highlight").length;
  const numFrontend = filterByCategory(projects, "frontend").length;
  const numBackend = filterByCategory(projects, "backend").length;
  const numOthers = filterByCategory(projects, "others").length;
  const numCurrProject = filterByCategory(projects, category).length;
  const filteredProjects = filterByCategory(projects, category).slice(
    0,
    numShown
  );

  return (
    <Tabs defaultValue={category}>
      <TabsList
        className="flex flex-wrap gap-2 sm:grid sm:grid-cols-5 py-0.5 sm:gap-1 mx-auto
        text-muted-foreground rounded-full dark:sm:bg-secondary
        border-none bg-transparent sm:bg-white dark:bg-transparent
        sm:border-solid sm:border max-w-[400px] sm:max-w-[555px] w-full h-auto"
      >
        <TabsTrigger
          className="tab data-[state=active]:bg-primary data-[state=active]:text-white"
          value="all"
          onClick={() => {
            setNumShown(6);
            setCategory("all");
          }}
        >
          All&nbsp;&nbsp;({numAll})
        </TabsTrigger>

        <TabsTrigger
          className="tab data-[state=active]:bg-primary data-[state=active]:text-white"
          value="highlight"
          onClick={() => {
            setNumShown(6);
            setCategory("highlight");
          }}
        >
          Highlight&nbsp;&nbsp;({numHighlight})
        </TabsTrigger>

        <TabsTrigger
          className="tab data-[state=active]:bg-primary data-[state=active]:text-white"
          value="frontend"
          onClick={() => {
            setNumShown(6);
            setCategory("frontend");
          }}
        >
          Frontend&nbsp;&nbsp;({numFrontend})
        </TabsTrigger>

        <TabsTrigger
          className="tab data-[state=active]:bg-primary data-[state=active]:text-white"
          value="backend"
          onClick={() => {
            setNumShown(6);
            setCategory("backend");
          }}
        >
          Backend&nbsp;&nbsp;({numBackend})
        </TabsTrigger>

        <TabsTrigger
          className="tab data-[state=active]:bg-primary data-[state=active]:text-white"
          value="others"
          onClick={() => {
            setNumShown(6);
            setCategory("others");
          }}
        >
          Others&nbsp;&nbsp;({numOthers})
        </TabsTrigger>
      </TabsList>

      <div className="flex flex-col items-center gap-y-10 pt-5">
        <div className="min-h-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project: Project, index: number) => (
              <TabsContent
                value={category}
                key={project.name}
                className="flex justify-center"
              >
                <ProjectCard
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                  stack={project.stack}
                  date={project.date}
                  index={index % 6}
                />
              </TabsContent>
            ))}
          </div>
        </div>

        {numShown < numCurrProject && (
          <Button
            onClick={() => setNumShown(numShown + 6)}
            className="rounded-full"
          >
            Load More
          </Button>
        )}
      </div>
    </Tabs>
  );
};

export default ProjectTab;
