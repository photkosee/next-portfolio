"use client";

import { motion } from "framer-motion";

import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Card, CardContent } from "@/components/ui/card";

const AboutMeBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="flex flex-col justify-center items-center w-full"
    >
      <div className="font-bold text-2xl md:text-3xl my-4">About Me</div>

      <Card className="w-full flex justify-center max-w-xl lg:max-w-none">
        <CardContent>
          <div className="text-center flex flex-col gap-y-3 max-w-[700px] pt-5">
            <div>
              My name is Phot Koseekrainiramon. I am a Computer Engineering
              student at the University of New South Wales who loves{" "}
              <span className="font-bold">solving problems</span> and{" "}
              <span className="font-bold">building things</span>, especially in
              web development.
            </div>
            <div>
              I enjoy creating user-friendly applications and working with both{" "}
              <span className="font-bold">front-end</span> and{" "}
              <span className="font-bold">back-end</span> technologies. I love
              learning new things by expanding my experience through various
              side projects, hackathon events, and internships throughout my
              academic journey.
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMeBox;
