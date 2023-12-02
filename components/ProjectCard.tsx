import Link from "next/link";
import Image from "next/image";

import { Calendar, GithubIcon, Link2Icon } from "lucide-react";
import { SiUml } from "react-icons/si";

import { Project } from "@/components/types";
import { Card, CardHeader } from "@/components/ui/card";

const ProjectCard = ({
  image,
  name,
  category,
  description,
  link,
  github,
  stack,
  date,
  uml,
}: Project) => {
  console.log(uml)

  return (
    <Card className="w-[300px] sm:max-w-[370px] relative group">
      <CardHeader className="p-0">
        <div className="
          relative w-full h-[170px] sm:h-[200px] flex items-center justify-center
          dark:bg-secondary/40 bg-[#fef5f5] overflow-hidden
          "
        >
          <Image
            className="absolute bottom-0 shadow-xl h-auto"
            src={image ? image : "./project-cover.png"}
            width={200}
            height={150}
            alt="project's mockup"
            priority
          />

          <div className="
            bg-black opacity-0 group-hover:opacity-50 absolute inset-0 rounded-t-sm
            scale-0 group-hover:scale-100 transition-all duration-100 z-10
            "
          />

          <div className="flex gap-5">
            {link &&
              <Link className="
                bg-secondary w-[50px] h-[50px] rounded-full
                flex justify-center items-center
                scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100
                transition-all duration-400 z-10
                "
                href={link}
                target="_blank"
              >
                <Link2Icon className="text-white" />
              </Link>
            }

            {uml &&
              <Link className="
                bg-secondary w-[50px] h-[50px] rounded-full
                flex justify-center items-center
                scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100
                transition-all duration-400 z-10
                "
                href={uml}
                target="_blank"
              >
                <SiUml className="text-white" />
              </Link>
            }

            <Link className="
              bg-secondary w-[50px] h-[50px] rounded-full
              flex justify-center items-center
              scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100
              transition-all duration-300 z-10
              "
              href={github}
              target="_blank"
            >
              <GithubIcon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="h-[180px] px-5 py-2 sm:py-3 flex flex-col gap-1 xs:gap-3">
        <h4 className="h4">{name}</h4>
        <p className="
          text-muted-foreground text-[12px] sm:text-[15px] leading-[17px]
          "
        >
          {description}
        </p>
      </div>

      <div className="absolute top-2 right-2">
        <div className="flex flex-col gap-2 items-center">
          {stack.map(((icon, index) => (
            <div key={index} className="
              text-[23px] text-primary sm:text-muted-foreground
              sm:dark:text-muted-foreground
              "
            >
              {icon}
            </div>
          )))}
        </div>
      </div>

      <div className="absolute left-3 bottom-1 flex gap-1 items-center">
        <Calendar size={15} className="text-primary" />
        <p className="text-muted-foreground text-[12px]">{date}</p>
      </div>

      <div className="
        absolute right-1 bottom-1 bg-primary text-white text-base
        px-2 rounded-t-[20px] rounded-bl-[20px] rounded-br-[9px]
        "
      >
        {category}
      </div>
    </Card>
  );
};

export default ProjectCard;
