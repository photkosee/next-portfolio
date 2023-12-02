import Link from "next/link";

import { RiMailSendLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import MouseDown from "@/components/MouseDown";
import WavyPattern from "@/components/WavyPattern";

const HeroSection = () => {
  return (
    <section className="
      relative bg-[#fef5f5] dark:bg-transparent w-full h-[86vh]
      flex justify-center items-center
      "
    >
      <WavyPattern />

      <div className="
        container flex flex-col md:flex-row-reverse -mt-12 z-10
        justify-center items-center gap-x-10 gap-y-3
        "
      >
        <div className="flex flex-col max-w-[380px] items-start">
          <div>
            <div className="
              text-[10px] md:text-sm uppercase font-semibold mb-2 text-primary
              tracking-[3px] flex items-center gap-x-2 justify-start
              "
            >
              <span className="hidden md:block w-5 h-[2px] bg-primary rounded-lg" />
              Full Stack Developer
            </div>

            <h1 className="
              text-big text-left flex flex-col
              items-start
              "
            >
              Hi there,
              <div className="flex gap-x-2 items-center">
                my name is
                <div className="text-primary">
                  Phot
                </div>
              </div>
            </h1>
            <p className="
              my-3 text-left text-muted-foreground font-light
              text-sm md:text-[16px] md:leading-[24px]
              "
            >
              A passionate developer on a mission to bring ideas to life through code
            </p>
          </div>

          <Socials
            containerStyles="
            flex md:hidden justify-center items-center
            gap-x-5
            "
            iconsStyles="text-[21px] hover:text-primary"
          />

          <div className="flex lex-row gap-x-2 sm:gap-x-3 mt-4">
            <Link href="/contact" passHref>
              <Button className="rounded-full gap-x-2">
                Contact Me
                <RiMailSendLine size={18} />
              </Button>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1uWHf6d2l4dzpXoTHBB2bLEyUznn6rV7M/view?usp=sharing"
              target="_blank"
              passHref
            >
              <Button className="rounded-full gap-x-1" variant="secondary">
                Resume
                <IoDocumentTextOutline size={19} />
              </Button>
            </Link>
          </div>
        </div>

        <Socials
          containerStyles="
          hidden md:flex justify-center items-center
          gap-x-5 md:flex-col md:gap-y-5
          "
          iconsStyles="text-[27px] hover:text-primary"
        />
      </div>

      <MouseDown />
    </section>
  );
};

export default HeroSection;
