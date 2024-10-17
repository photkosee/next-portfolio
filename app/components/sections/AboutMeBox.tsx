"use client";

import { motion } from "framer-motion";

import useAnimateOnView from "@/app/hooks/useAnimateOnView";

const AboutMeBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      className="w-full rounded-3xl border py-5 px-3 sm:px-5 flex flex-col items-center gap-y-3
      shadow-md max-w-[650px] lg:max-w-none mx-auto"
      ref={ref}
      animate={animation}
    >
      <div className="font-bold text-2xl md:text-3xl">About Me</div>

      <div className="text-center flex flex-col gap-y-3 max-w-[700px]">
        <div>
          My name is Phot Koseekrainiramon. I am a Computer Engineering student
          at the University of New South Wales who loves{" "}
          <span className="text-primary">solving problems</span> and{" "}
          <span className="text-primary">building things</span>, especially in
          web development.
        </div>
        <div>
          I enjoy creating user-friendly applications and working with both{" "}
          <span className="text-primary">front-end</span> and{" "}
          <span className="text-primary">back-end</span> technologies. I love
          learning new things by expanding my experience through various side
          projects, hackathon events, and internships throughout my academic
          journey.
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMeBox;
