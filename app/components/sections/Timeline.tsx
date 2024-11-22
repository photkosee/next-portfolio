import { Experience } from "@/app/types";
import { Card, CardContent } from "@/components/ui/card";
import TimelineItem from "@/app/components/sections/TimelineItem";

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-0 h-full">
        <ul className="ml-10 border-l h-full pt-2 pb-1">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Timeline;
