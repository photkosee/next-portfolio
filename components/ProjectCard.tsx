import { Project } from "@/components/types";

const ProjectCard = ({
  image,
  category,
  name,
  description,
  link,
  github,
}: Project) => {
  return (
    <div>
      {name}
    </div>
  );
};

export default ProjectCard;
