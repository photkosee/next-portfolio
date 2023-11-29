"use client";

import { motion } from "framer-motion";

import useScrollProgress from "@/hooks/useScrollProgress";

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  const scrollProgress = useScrollProgress() - 100;

  return (
    <>
      <motion.main
        variants={{
          hidden: { opacity: 0 },
          enter: { opacity: 1 },
        }}
        initial="hidden"
        animate="enter"
        transition={{
          type: "linear",
          delay: 0.2,
          duration: 0.4,
        }}
      >
        {children}
      </motion.main>

      <span
        style={{
          transform: `translateY(${scrollProgress}%)`
        }}
        className="
        fixed top-0 right-0 bottom-0 w-1 z-50 bg-primary rounded-lg
        transition-all duration-700
        "
      />
    </>
  );
};
