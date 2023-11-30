"use client";

import { motion } from "framer-motion";

export default function Template({
  children
}: {
  children: React.ReactNode
}) {

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
    </>
  );
};
