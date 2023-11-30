"use client";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ArrowDoodle from "@/components/ArrowDoodle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/components/storage";
import { Button } from "@/components/ui/button";

const ProjectSection = () => {
  return (
    <section className="relative mt-28">
      <div className="container mx-auto flex flex-col gap-7 relative h-[84vh]">
        <div className="
          max-w-[330px] xl:max-w-[440px] mx-auto md:h-full lg:mx-0
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

          <div className="w-full flex justify-center">
            <Link className="max-w-[170px]" href="/projects" passHref>
              <Button className="rounded-full max-w-[170px]">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>

        <div className="
          lg:max-w-[600px] xl:max-w-[750px] lg:absolute right-0 top-0
          flex items-center h-full
          "
        >
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

      <svg className="
        absolute top-24 left-[70px] xl:left-[220px] -z-10 rotate-90
        dark:hidden hidden lg:block
        "
        width="400"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 200
           C 50 50, 150 0, 300 50
           S 400 250, 300 250
           Q 250 250, 200 150
           C 150 50, 50 100, 50 200"
          fill="#fef5f5"
        />
      </svg>
    </section>
  );
};

export default ProjectSection;
