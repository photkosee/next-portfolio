import { Variants } from "framer-motion";

export const fadeIn = (
  direction: string
): Variants => {
  return {
    offscreen: {
      y: direction === "up"
        ? -100
        : direction === "down"
        ? 100
        : 0,
      x: direction === "left"
        ? -100
        : direction === "right"
        ? 100
        : 0,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
