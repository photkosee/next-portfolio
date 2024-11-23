import AboutMeBox from "@/app/components/sections/AboutMeBox";
import TechBox from "@/app/components/sections/TechBox";
import WorkAndEduBox from "@/app/components/sections/WorkAndEduBox";
import ConnectBox from "@/app/components/sections/ConnectBox";

const AboutSection = () => {
  return (
    <section className="w-full h-auto bg-white relative py-[70px] dark:bg-secondary/40">
      <div
        className="dark:hidden bg-white absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full
        w-full dark:bg-secondary/40"
      />

      <div className="max-w-5xl mx-auto px-1 xs:px-3 sm:px-5 flex flex-col gap-y-16">
        <AboutMeBox />

        <WorkAndEduBox />

        <div className="grid grid-cols-1 lg:grid-cols-2 sm:auto-rows-fr gap-x-5 gap-y-16">
          <div className="flex-1 max-w-xl mx-auto w-full h-full">
            <TechBox />
          </div>
          <div className="flex-1 max-w-xl mx-auto w-full h-full">
            <ConnectBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
