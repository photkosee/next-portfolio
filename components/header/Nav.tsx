"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "projects",
  },
  {
    path: "https://photkosee.github.io/hugo-blog/",
    name: "blog",
  },
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
  const path = usePathname();

  return (
    <nav
      className={`
      ${containerStyles}
      `}
    >
      {links.map((link, index) => (
        <Link
          className={`
          capitalize ${linkStyles} flex
          `}
          href={link.path}
          key={index}
          target={link.name === "my blog" ? "_blank" : ""}
        >
          {link.path === path && (
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
