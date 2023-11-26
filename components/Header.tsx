"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import ModeToggle from "@/components/ModeToggle";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  const [top, setTop] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    // Whether the current scroll position is at the top of the page
    const scrollYPosition = () =>
      window.scrollY > 50 ? setTop(true) : setTop(false);

    window.addEventListener("scroll", scrollYPosition);

    return () => window.removeEventListener("scroll", scrollYPosition);
  }, []);

  return (
    <header className={`
      ${top
        ? "bg-white shadow-lg dark:bg-accent"
        : "py-2 dark:bg-transparent"
      } sticky top-0 z-30 transition-all
      ${path === "/" && "bg-[#fef9f5]"}
      `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div />

          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden md:flex items-center gap-x-8"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="
              absolute left-0 top-full h-1 bg-primary w-full rounded-lg
              "
            />
            <ModeToggle />

            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
