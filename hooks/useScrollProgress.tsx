import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;

      // Calculates the scroll progress
      if (totalHeight) {
        // By dividing the current scroll position by the total scrollable height
        setProgress(Number((currentPosition / totalHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return progress;
};

export default useScrollProgress;
