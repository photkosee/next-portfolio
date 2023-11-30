"use client";

import useScrollProgress from "@/hooks/useScrollProgress";

const MouseDown = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className={`
      absolute bottom-5 ${scrollProgress > 5 && "hidden"}
      `}
    >
      <div className="
        border-[2px] border-solid border-primary h-6 w-4 m-auto
        rounded-lg relative
        "
      >
        <div className="
          bg-primary rounded-full w-[3px] h-[6px] absolute
          top-[5px] left-[5px] animate-bounce
          "
        />
      </div>
    </div>
  );
};

export default MouseDown;
