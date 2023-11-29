import Link from "next/link";
import Image from "next/image";

import { Github, Link2Icon } from "lucide-react";

import { Project } from "@/components/types";
import { Card, CardHeader } from "@/components/ui/card";

const ProjectCard = ({
  image,
  category,
  name,
  description,
  link,
  github,
}: Project) => {
  return (
    <Card className="w-[380px] relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[250px] flex items-center justify-center dark:bg-secondary/40">
          <Image
            className="absolute bottom-0 shadow-xl"
            src={image}
            width={247}
            height={250}
            alt="project's mockup"
            priority
          />
        </div>
      </CardHeader>

      <div className="h-[180px] px-8 py-6">
        <div className="text-sm absolute top-4 right-5">
          {category}
        </div>
        <h4 className="mb-1">{name}</h4>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
