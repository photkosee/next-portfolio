"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// import ModeToggle from "@/components/header/ModeToggle";
import Nav from "@/app/components/headers/Nav";
import MobileNav from "@/app/components/headers/MobileNav";
import Socials from "@/app/components/headers/Socials";

const ModeSwitch = dynamic(
  () => import("@/app/components/headers/ModeSwitch"),
  {
    ssr: false,
  }
);

const Header = () => {
  const [top, setTop] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    // Whether the current scroll position is at the top of the page
    const scrollYPosition = () =>
      window.scrollY > 0 ? setTop(true) : setTop(false);

    window.addEventListener("scroll", scrollYPosition);

    return () => window.removeEventListener("scroll", scrollYPosition);
  }, []);

  return (
    <header
      className={`
      ${
        top
          ? "bg-white shadow-lg dark:bg-accent"
          : "backdrop-blur-md dark:bg-transparent"
      } fixed w-full py-[22px] lg:py-[25px] top-0 z-30 transition-all
      `}
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center gap-x-6">
          <div>
            <ModeSwitch />
          </div>

          <div className="flex items-center gap-x-8">
            <Nav
              containerStyles="hidden md:flex items-center gap-x-8"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="
              absolute left-0 top-full h-[2px] bg-primary w-full rounded-lg
              "
            />
            <Socials
              containerStyles="w-full hidden md:flex justify-center items-center gap-x-5 mb-[2px]"
              iconsStyles="text-[23px] hover:text-primary"
            />
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
