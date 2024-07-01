import { GithubIcon, Rocket } from "lucide-react";

import ProjectTab from "@/components/sections/ProjectTab";
import WavyPattern from "@/components/background/WavyPattern";

const Projects = () => {
  return (
    <main className="min-h-screen pt-12 relative">
      <div className="container h-full flex flex-col relative gap-4 sm:gap-5">
        <div className="w-full flex gap-4 items-center justify-center">
          <h2 className="text-big">My Projects</h2>
          <Rocket className="text-primary" size={30} />
        </div>

        <div
          className="text-muted-foreground text-[13.5px] sm:text-[15px]
          leading-[17px] text-center w-full flex justify-center"
        >
          <div className="flex flex-col gap-1.5">
            Hover over any project card below,
            <div className="text-nowrap flex items-center gap-1.5">
              then click on the <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              icon for the project{`'`}s details
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <ProjectTab />
        </div>
      </div>

      <div
        className="
        absolute min-w-full h-[350px] top-0 -z-20 bg-[#fef5f5] dark:bg-transparent
        "
      >
        <div className="w-full h-full relative">
          <WavyPattern
            className="
            absolute bottom-0 w-full h-auto dark:hidden transform scale-x-[-1]
            "
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
