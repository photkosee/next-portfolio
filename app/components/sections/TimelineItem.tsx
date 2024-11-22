import { Experience } from "@/app/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TimelineItem = ({
  company,
  role,
  logo,
  year,
  description,
  size,
}: Experience) => {
  return (
    <li className="relative pl-10 pr-3 py-4 w-full max-w-xl">
      <div className="absolute -left-[20px] top-5 flex items-center justify-center rounded-full">
        <Avatar className="size-12 border">
          <AvatarImage
            src={logo}
            alt={company}
            className="bg-background object-contain size-7"
          />
          <AvatarFallback>{company[0]}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col justify-start gap-1">
        <time className="text-xs text-muted-foreground">
          <span>{year}</span>
        </time>

        <h2 className="font-semibold leading-none break-words">{company}</h2>

        <p className="text-sm text-muted-foreground">{role}</p>

        {description && (
          <ul className="ml-4 list-outside list-disc">
            {description.map((desc, i) => (
              <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default TimelineItem;
