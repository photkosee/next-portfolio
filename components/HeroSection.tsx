import Link from "next/link";

import { RiMailSendLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";

const HeroSection = () => {
  return (
    <section className="
      relative bg-[#fef9f5] dark:bg-transparent w-full h-[84vh]
      flex justify-center items-center
      "
    >
      <svg className="
        absolute bottom-0 w-full h-auto dark:hidden
        "
        id="wavy"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-300 0 950 270"
      >
        <path
          d="M-314,267 C105,364 400,100 812,279"
          fill="none"
          stroke="white"
          strokeWidth="120"
          strokeLinecap="round"
        />
      </svg>

      <div className="
        container w-full flex flex-col md:flex-row-reverse -mt-12 z-10
        justify-center items-center gap-x-10 gap-y-3
        "
      >
        <div className="flex flex-col max-w-[380px] items-center md:items-start">
          <div>
            <div className="
              text-[10px] md:text-sm uppercase font-semibold mb-2 text-primary
              tracking-[3px] flex items-center gap-x-2 justify-center md:justify-start
              "
            >
              <span className="hidden md:block w-5 h-[2px] bg-primary rounded-lg" />
              Software Developer
            </div>
            <h1 className="text-big text-center md:text-left">
              Hi there, I&rsquo;m Phot Koseekrainiramon
            </h1>
            <p className="mt-3 text-center md:text-left">
              Brief description about myself and my journey
            </p>
          </div>

          <Socials
            containerStyles="
            flex md:hidden justify-center items-center
            gap-x-5 mt-1
            "
            iconsStyles="text-[22px]"
          />

          <div className="
            flex flex-col gap-y-2 md:flex-row gap-x-5 lg:gap-x-7 mt-5
            w-full max-w-[150px]
            "
          >
            <Link href="/contact" passHref>
              <Button className="rounded-full gap-x-2 w-full">
                Contact me
                <RiMailSendLine size={18} />
              </Button>
            </Link>

            <Button className="rounded-full gap-x-1" variant="secondary">
              Resume
              <IoDocumentTextOutline size={19} />
            </Button>
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

      <div className="absolute bottom-2">
        <div className="
          border-[2px] border-solid border-primary h-6 w-4 m-auto
          rounded-lg relative
          "
        >
          <div className="
            bg-primary rounded-full w-[3px] h-[6px] absolute
            top-[5px] left-[5px] animate-bounce
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
