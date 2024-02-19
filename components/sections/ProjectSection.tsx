"use client";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import ArrowDoodle from "@/components/background/ArrowDoodle";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/components/storage";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/components/variants";

const ProjectSection = () => {
  return (
    <section className="mt-28">
      <motion.div
        className="
        container flex flex-col gap-7 relative
        max-w-screen overflow-x-hidden
        "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="
          max-w-[350px] xl:max-w-[480px] mx-auto h-1/2 lg:h-[84vh] lg:mx-0
          flex flex-col justify-end lg:justify-center lg:pl-10 xl:pl-28
          "
          variants={fadeIn("left")}
        >
          <div
            className="
            font-bold relative w-full flex items-center justify-center
            text-2xl md:text-3xl
            "
          >
            <ArrowDoodle />
            Recent Projects
          </div>

          <p
            className="
            my-2 lg:my-5 text-center text-muted-foreground font-light
            text-sm md:text-[16px] md:leading-[24px]
            "
          >
            Exploring new ventures and mastering existing skills through diverse
            projects
          </p>

          <div className="w-full flex justify-center">
            <Link className="max-w-[170px]" href="/projects" passHref>
              <Button className="rounded-full max-w-[170px]">
                View All Projects
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="
          lg:w-[600px] xl:w-[750px] lg:absolute right-5 top-0
          flex items-center h-full max-h-[450px] lg:max-h-full
          "
          variants={fadeIn("right")}
        >
          <Swiper
            className="w-full h-[400px] sm:h-[430px]"
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            }}
            breakpoints={{
              600: {
                slidesPerView: 1.5,
              },
              700: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {projects.slice(0, 4).map((project, index) => (
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
                  uml={project.uml}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
