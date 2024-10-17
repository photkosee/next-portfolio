"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useAnimateOnView = (triggerOnce = true) => {
  const [ref, inView] = useInView({ triggerOnce });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          y: { type: "spring", mass: 0.5, damping: 8, stiffness: 200 },
          delay: 0.1,
        },
      });
    } else {
      animation.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView, animation]);

  return { ref, animation };
};

export default useAnimateOnView;
