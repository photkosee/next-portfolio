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
      <div className="container mx-auto flex flex-col gap-7 relative h-[84vh]">
        <div className="
          max-w-[330px] xl:max-w-[440px] mx-auto h-full lg:mx-0
          flex flex-col lg:justify-center lg:pl-10 xl:pl-28
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
            my-2 lg:my-5 text-left text-muted-foreground font-light
            text-sm md:text-md max-w-xs
            "
          >
            Exploring new ventures and mastering existing skills
            through diverse projects
          </p>

          <Link className="w-full" href="/projects" passHref>
            <Button className="rounded-full w-full">
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="lg:max-w-[600px] xl:max-w-[750px] lg:absolute right-0 top-0 flex items-center h-full">
          <Swiper className="
            h-[480px]
            "
            style={{
              "--swiper-pagination-color": "#fe5e70",
            }}
            slidesPerView={1}
            breakpoints={{
              720: {
                slidesPerView: 1.5,
              },
              920: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 1.5,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <SwiperSlide
                style={{
                  display: "flex !important",
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
