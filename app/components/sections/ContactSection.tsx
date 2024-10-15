import Link from "next/link";

import { RiMailSendLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="relative flex justify-center py-[70px] dark:bg-secondary/40 bg-white">
      <div
        className="dark:hidden bg-white absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full
        w-full dark:bg-secondary/40"
      />

      <div className="px-5">
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
