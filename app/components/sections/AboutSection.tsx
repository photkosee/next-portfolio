import AboutMeBox from "@/app/components/sections/AboutMeBox";
import WorkBox from "@/app/components/sections/WorkBox";
import TechBox from "@/app/components/sections/TechBox";
import EduBox from "@/app/components/sections/EduBox";
import ContactBox from "@/app/components/sections/ContactBox";

const AboutSection = () => {
  return (
    <section className="w-full h-auto bg-white relative pt-[70px] pb-[140px] dark:bg-secondary/40">
      <div
        className="dark:hidden bg-white absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full
        w-full dark:bg-secondary/40"
      />

      <div className="max-w-5xl mx-auto px-1 xs:px-3 sm:px-5 flex flex-col gap-y-5">
        <AboutMeBox />

        <div className="flex flex-col lg:flex-row gap-5 max-w-[650px] lg:max-w-none mx-auto">
          <div className="flex-1 flex flex-col gap-y-5">
            <WorkBox />

            <div className="hidden lg:block">
              <ContactBox />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-y-5">
            <EduBox />
            <TechBox />
          </div>

          <div className="lg:hidden">
            <ContactBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
