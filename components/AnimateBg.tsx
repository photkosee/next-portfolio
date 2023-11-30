"use client";

import Lottie from "lottie-react";

import animationData from "@/components/bg-animation.json";

const AnimateBg = () => {
  return (
    <div className="max-w-[400px] xl:max-w-[470px]">
      <Lottie animationData={animationData} className="hidden lg:block" />
    </div>
  );
};

export default AnimateBg;
