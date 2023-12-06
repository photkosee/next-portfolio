import { Presentation } from "lucide-react";

import ProjectTab from "@/components/sections/ProjectTab";
import WavyPattern from "@/components/background/WavyPattern";

const Projects = () => {
  return (
    <main className="min-h-screen pt-12 relative">
      <div className="container h-full flex flex-col relative">
        <div className="w-full flex gap-4 items-center justify-center">
          <h2 className="text-big">
            My Projects
          </h2>
          <Presentation className="text-primary" size={30} />
        </div>

        <div className="flex justify-center mt-7 mb-20">
          <ProjectTab />
        </div>
      </div>

      <div className="
        absolute min-w-full h-[350px] top-0 -z-20 bg-[#fef5f5] dark:bg-transparent
        "
      >
        <div className="w-full h-full relative">
          <WavyPattern className="
            absolute bottom-0 w-full h-auto dark:hidden transform scale-x-[-1]
            "
          />
        </div>
      </div>
    </main>
  );
};

export default Projects;
