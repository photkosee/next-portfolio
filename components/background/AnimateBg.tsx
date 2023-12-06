"use client";

import Lottie from "lottie-react";

import animationData from "@/components/background/bg-animation.json";

const AnimateBg = () => {
  return (
    <>
      {typeof animationData !== "undefined" &&
        <div className="max-w-[400px] xl:max-w-[470px]">
          <Lottie
            className="hidden lg:block"
            animationData={animationData}
            loop
          />
        </div>
      }
    </>
  );
};

export default AnimateBg;
