"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import ModeToggle from "@/components/header/ModeToggle";
import Nav from "@/components/header/Nav";
import MobileNav from "@/components/header/MobileNav";
import Socials from "./Socials";

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
      ${!top && path !== "/contact" && "bg-[#fef5f5]"}
      ${
        top ? "bg-white shadow-lg dark:bg-accent" : "dark:bg-transparent"
      } sticky py-2 top-0 z-30 transition-all
      `}
    >
      <div className="container">
        <div className="flex justify-between items-center gap-x-6">
          <ModeToggle />
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
              iconsStyles="text-[20px] hover:text-primary"
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
