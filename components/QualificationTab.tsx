import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

const experiences = [
  {
    title: "education",
    data: [
      {
        company: "The University of New South Wales (UNSW)",
        role: "Bachelor of Computer Engineering",
        years: "2022 - 2024",
      },
      {
        company: "Thammasat University",
        role: "Bachelor of Electrical Engineering",
        years: "2019 - 2021",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Cloud Natician",
        role: "Software Engineer",
        years: "2023 - Present",
      },
      {
        company: "UNSW Computer Sceience and Engineering",
        role: "Casual Academic",
        years: "2023 - 2023",
      },
    ],
  },
];

const QualificationTab = () => {
  return (
    <Tabs defaultValue="experiences">
      <TabsList className="
        inline-flex items-center justify-center bg-[#fef5f5] p-1
        text-muted-foreground rounded-full dark:md:bg-secondary border
        "
      >
        <TabsTrigger className="
          w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="experiences"
        >
          Experiences
        </TabsTrigger>

        <TabsTrigger className="
          w-28 rounded-full data-[state=active]:bg-primary
          data-[state=active]:text-white
          "
          value="stacks"
        >
          Stacks
        </TabsTrigger>
      </TabsList>
      
      <div className="text-lg">
        <TabsContent value="experiences">
          Ex
        </TabsContent>

        <TabsContent value="stacks">
          Stack
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default QualificationTab;
