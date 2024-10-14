"use client";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

import { fadeIn } from "@/app/variants";
import { Button } from "@/components/ui/button";
import projects from "@/app/data/projects";
import ArrowDoodle from "@/app/components/ArrowDoodle";
import ProjectCard from "@/app/components/ProjectCard";

const ProjectSection = () => {
  return (
    <section className="my-10">
      <div
        className="
        w-full mx-auto flex flex-col gap-y-7 relative
        overflow-x-hidden max-w-7xl px-3 lg:min-h-screen
        "
      >
        <div className="max-w-[350px] mx-auto flex flex-col justify-center gap-3">
          <div
            className="
            font-bold relative w-full flex items-center justify-center
            text-2xl md:text-3xl
            "
          >
            <ArrowDoodle />
            Personal Projects
          </div>

          <div className="w-full flex justify-center flex-col items-center gap-5">
            <div
              className="text-muted-foreground text-[13.5px] sm:text-[15px]
              leading-[17px] text-center"
            >
              <div className="flex flex-col gap-1.5">
                Hover over any project card below,
                <div className="text-nowrap flex items-center gap-1 sm:gap-1.5">
                  then click on the
                  <SiGithub className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  icon for further project details
                </div>
              </div>
            </div>
            <Link className="max-w-[170px]" href="/projects" passHref>
              <Button className="rounded-full max-w-[170px]">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center h-full max-h-[450px] mx-auto">
          <Swiper
            className="h-[400px] sm:h-[430px]"
            slidesPerView={1}
            breakpoints={{
              700: {
                slidesPerView: 2,
              },
              1050: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {projects
              .filter((product) => product.show)
              .map((project, index) => (
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                  key={index}
                >
                  <ProjectCard
                    name={project.name}
                    image={project.image}
                    category={project.category}
                    description={project.description}
                    link={project.link}
                    github={project.github}
                    stack={project.stack}
                    date={project.date}
                    // uml={project.uml}
                    index={index}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
