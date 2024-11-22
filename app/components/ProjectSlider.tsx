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
        startIndex: 1,
        align: "center",
      }}
      className="w-full relative"
    >
      <CarouselContent className="gap-3">
        {highlightedProjects.map((project, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-1/2 flex items-center justify-center"
          >
            <ProjectCard {...project} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectSlider;
