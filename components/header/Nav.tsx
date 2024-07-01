"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useMobileNav } from "@/app/MobileNavContext";

const links = [
  {
    path: "/home",
    name: "home",
  },
  {
    path: "/projects",
    name: "projects",
  },
  // {
  //   path: "https://photkosee.github.io/hugo-blog/",
  //   name: "blog",
  // },
  {
    path: "/contact",
    name: "contact",
  },
];

const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}) => {
  const [hasVisitedProject, setHasVisitedProject] = useState<boolean>(false);
  const { closeMobileNav } = useMobileNav();
  const path = usePathname();
  // Check whether the user have visited the project page before
  // If not, show the ping animation
  const checkPing = (linkPath: string) => {
    return linkPath === "/projects" && path !== linkPath && !hasVisitedProject;
  };

  useEffect(() => {
    if (path === "/projects") {
      setHasVisitedProject(true);
    }
  }, [path]);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          className={`
          capitalize ${linkStyles} flex relative
          `}
          href={link.path}
          key={index}
          target={link.name === "blog" ? "_blank" : ""}
          onClick={closeMobileNav}
        >
          <span
            className={`${
              !checkPing(link.path) && "hidden"
            } animate-ping absolute -right-3 inline-flex h-2 w-2 rounded-full bg-primary opacity-75`}
          />
          <span
            className={`${
              !checkPing(link.path) && "hidden"
            } absolute -right-3 inline-flex rounded-full h-2 w-2 bg-primary`}
          />
          {(link.path === path || (link.path === "/home" && path === "/")) && (
            <motion.span
              className={`${underlineStyles}`}
              initial={{
                y: "-100%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                type: "tween",
              }}
              layoutId="underline"
            />
          )}

          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
