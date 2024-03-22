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
        w-full mx-auto flex flex-col lg:flex-row gap-y-7 gap-x-3 relative
        overflow-x-hidden max-w-7xl lg:pl-8 xl:pl-20 lg:items-center
        "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="
          max-w-[330px] mx-auto h-1/2 lg:h-[84vh] lg:mx-0
          flex flex-col justify-center
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
            My Projects
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
          max-w-[650px] w-full xl:max-w-[750px]
          flex items-center h-full max-h-[450px] lg:max-h-full mx-auto
          "
          variants={fadeIn("right")}
        >
          <Swiper
            className="w-full h-[400px] sm:h-[430px]"
            slidesPerView={1}
            autoplay={{
              delay: 5500,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            }}
            breakpoints={{
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
