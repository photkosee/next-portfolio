import Link from "next/link";

import { RiMailSendLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import WavyPattern from "@/app/components/WavyPattern";

const ContactSection = () => {
  return (
    <section className="pt-20">
      <div className="relative -z-10">
        <WavyPattern color="#fef5f5" />
      </div>

      <div className="bg-[#fef5f5] dark:bg-secondary/40 px-5 py-10">
        <div className="flex flex-col items-center gap-5">
          <h2 className="h2 max-w-xl text-center">
            Would you like to work together? I&rsquo;m here to discuss.
          </h2>

          <Link href="/contact" passHref>
            <Button className="rounded-full gap-2">
              Contact Me
              <RiMailSendLine size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
