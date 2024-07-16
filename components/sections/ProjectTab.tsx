"use client";

import { useState } from "react";

import { projects } from "@/components/storage";
import ProjectCard from "@/components/cards/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const ProjectTab = () => {
  const [category, setCategory] = useState<string>("all");
  const [numShown, setNumShown] = useState(6);
  const numAll = projects.length;
  const numHighlight = projects.filter((project) => project.show).length;
  const numFrontend = projects.filter(
    (project) =>
      project.category === "frontend" || project.category === "fullstack"
  ).length;
  const numBackend = projects.filter(
    (project) =>
      project.category === "backend" || project.category === "fullstack"
  ).length;
  const numOthers = projects.filter(
    (project) => project.category === "others"
  ).length;
  const numCurrProject = projects.filter((project) => {
    if (category === "all") return project;
    if (category === "others") return project.category === "others";
    return category === project.category || project.category === "fullstack";
  }).length;
  const filteredProjects = projects
    .filter((project) => {
      if (category === "highlight") return project.show;
      if (category === "all") return project;
      if (category === "others") return project.category === "others";
      return category === project.category || project.category === "fullstack";
    })
    .slice(0, numShown);

  return (
    <Tabs defaultValue={category}>
      <TabsList
        className="
        grid sm:grid-cols-5 py-0 gap-1 mx-auto
        text-muted-foreground rounded-full dark:sm:bg-secondary
        border-none bg-transparent sm:bg-white dark:bg-transparent
        sm:border-solid sm:border max-w-[555px] w-full
        "
      >
        <TabsTrigger
          className="
          w-full rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white 
          "
          value="all"
          onClick={() => {
            setNumShown(6);
            setCategory("all");
          }}
        >
          All&nbsp;&nbsp;({numAll})
        </TabsTrigger>

        <TabsTrigger
          className="
          w-full rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white 
          "
          value="highlight"
          onClick={() => {
            setNumShown(6);
            setCategory("highlight");
          }}
        >
          Highlight&nbsp;&nbsp;({numHighlight})
        </TabsTrigger>

        <TabsTrigger
          className="
          w-full rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="frontend"
          onClick={() => {
            setNumShown(6);
            setCategory("frontend");
          }}
        >
          Frontend&nbsp;&nbsp;({numFrontend})
        </TabsTrigger>

        <TabsTrigger
          className="
          w-full rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="backend"
          onClick={() => {
            setNumShown(6);
            setCategory("backend");
          }}
        >
          Backend&nbsp;&nbsp;({numBackend})
        </TabsTrigger>

        <TabsTrigger
          className="
          w-[107px] rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="others"
          onClick={() => {
            setNumShown(6);
            setCategory("others");
          }}
        >
          Others&nbsp;&nbsp;({numOthers})
        </TabsTrigger>
      </TabsList>

      <div className="flex flex-col items-center gap-y-7">
        <div
          className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-4 mt-[145px] sm:mt-3 min-h-[800px]
          "
        >
          {filteredProjects.map((project, index) => (
            <TabsContent
              value={category}
              key={project.name}
              className="flex justify-center"
            >
              <ProjectCard
                image={project.image}
                category={project.category}
                name={project.name}
                description={project.description}
                link={project.link}
                github={project.github}
                stack={project.stack}
                date={project.date}
                uml={project.uml}
                index={index % 6}
              />
            </TabsContent>
          ))}
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
