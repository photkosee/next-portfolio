"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { RiLinkedinBoxFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();
  const { ref: ref2, animation: animation2 } = useAnimateOnView();

  return (
    <section
      className="relative flex justify-center py-[70px] dark:bg-secondary/40 bg-[#fef5f5]"
      id="contact"
    >
      <div
        className="dark:hidden bg-[#fef5f5] absolute -top-10 h-14 rounded-t-3xl md:rounded-t-full
        w-full dark:bg-secondary/40"
      />

      <div className="px-3 sm:px-5">
        <div className="flex flex-col items-center gap-y-7">
          <motion.h2
            className="h2 max-w-xl text-center"
            ref={ref}
            animate={animation}
          >
            Would you like to work together? I&rsquo;m here to discuss.
          </motion.h2>

          <motion.div ref={ref2} animate={animation2} className="w-full">
            <Card className="w-full flex justify-center">
              <CardContent className="w-full flex flex-col gap-y-5">
                <div className="flex flex-col text-center pt-4">
                  <h1 className="font-bold text-2xl md:text-3xl text-center w-full">
                    Contact Me
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Phot Koseekrainiramon
                  </p>
                </div>

                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center justify-center gap-x-2">
                    <BiLogoGmail className="w-5 h-5 text-red-700 dark:text-white" />
                    <div className="select-none">Email:</div>
                    <p>phot.kosee@gmail.com</p>
                  </div>

                  <Link
                    href="https://www.linkedin.com/in/photkosee/"
                    target="_blank"
                    className="w-full"
                    passHref
                  >
                    <Button variant="outline" className="gap-x-2 w-full">
                      <RiLinkedinBoxFill className="w-5 h-5 text-blue-700 dark:text-white" />
                      LinkedIn
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
