"use client";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ArrowDoodle from "@/components/ArrowDoodle";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    image: "/next.svg",
    category: "frontend",
    name: "Website",
    description:
      "this is a website building with love and to improve my skill",
    link: "/",
    github: "/",
  },
  {
    image: "/next.svg",
    category: "frontend",
    name: "Website",
    description:
      "this is a website building with love and to improve my skill",
    link: "/",
    github: "/",
  },
  {
    image: "/next.svg",
    category: "frontend",
    name: "Website",
    description:
      "this is a website building with love and to improve my skill",
    link: "/",
    github: "/",
  },
  {
    image: "/next.svg",
    category: "frontend",
    name: "Website",
    description:
      "this is a website building with love and to improve my skill",
    link: "/",
    github: "/",
  },
];

const ProjectSection = () => {
  return (
    <section className="relative mt-28">
      <div className="container mx-auto flex flex-col gap-7">
        <div className="
          max-w-[330px] mx-auto xl:mx-0 xl:h-[84vh]
          flex flex-col xl:justify-center
          "
        >
          <div className="
            font-bold relative w-full flex items-center justify-center
            text-2xl md:text-3xl
            "
          >
            <ArrowDoodle />
            Recent Projects
          </div>

          <p className="
            my-2 xl:my-3 text-left text-muted-foreground font-light
            text-sm md:text-md max-w-xs
            "
          >
            Exploring new ventures and mastering existing skills
            through diverse projects
          </p>

          <Link className="w-full" href="/projects" passHref>
            <Button className="rounded-full w-full">
              All Projects
            </Button>
          </Link>
        </div>

        <div className="xl:max-w-[900px] xl:absolute right-0 top-20">
          <Swiper className="
            h-[430px] bg-pink-100
            "
            style={{
              "--swiper-pagination-color": "#fe5e70",
            }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projects.slice(0.4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  name={project.name}
                  image={project.image}
                  category={project.category}
                  description={project.description}
                  link={project.link}
                  github={project.github}
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
