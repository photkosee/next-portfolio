import CircleDoodle from "@/components/CircleDoodle";
import QualificationTab from "./QualificationTab";

const AboutSection = () => {
  return (
    <section className="w-full h-[84vh]">
      <div className="
        container mx-auto flex flex-col md:flex-row w-full h-full
        justify-center gap-y-12 md:justify-around items-center
        "
      >
        <div className="
          text-3xl font-bold relative w-max flex items-center justify-between
          gap-x-3 before:
          "
        >
          <CircleDoodle />
          About me
        </div>

        <div>
          <div className="flex-1">
            <QualificationTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
