import ProjectCard from "@/app/components/ProjectCard";
import projects from "@/app/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectSlider = () => {
  const highlightedProjects = projects.filter((project) => project.show);

  return (
    <Carousel
      opts={{
        startIndex: 0,
        align: "center",
      }}
      className="w-full relative"
    >
      <CarouselContent>
        {highlightedProjects.map((project, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
          >
            <ProjectCard {...project} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="relative">
        <div className="absolute -bottom-9 sm:-bottom-10 left-1/2 -translate-x-1/2">
          <CarouselPrevious className="dark:bg-black" />
          <CarouselNext className="dark:bg-black" />
        </div>
      </div>
    </Carousel>
  );
};

export default ProjectSlider;
