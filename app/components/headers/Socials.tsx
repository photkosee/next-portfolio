"use client";

import Link from "next/link";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/photkosee/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/photkosee",
    name: <RiGithubFill />,
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
        >
          <div className={`${iconsStyles} p-1`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
