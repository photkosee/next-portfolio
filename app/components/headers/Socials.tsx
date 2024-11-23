"use client";

import Link from "next/link";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/photkosee/",
    name: <RiLinkedinFill />,
    desc: "Link to my LinkedIn profile",
  },
  {
    path: "https://github.com/photkosee",
    name: <RiGithubFill />,
    desc: "Link to my GitHub profile",
  },
];

const Socials = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string;
  iconsStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link
          className="flex items-center"
          href={icon.path}
          key={index}
          target="_blank"
          aria-label={icon.desc}
        >
          <div className={`${iconsStyles} md:p-1`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
