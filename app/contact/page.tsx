"use client";

import Image from "next/image";

import { AtSign } from "lucide-react";
import { motion } from "framer-motion";

import ContactForm from "@/components/forms/ContactForm";
import AnimateBg from "@/components/background/AnimateBg";
import { fadeIn } from "@/components/variants";

const Contact = () => {
  return (
    <main className="min-h-[86vh] flex items-center">
      <motion.div
        className="
        container flex flex-col items-center justify-center
        lg:flex-row lg:justify-around h-full my-4
        max-w-screen overflow-x-hidden
        "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div className="hidden lg:block" variants={fadeIn("left")}>
          <Image
            src="./images/contact-cover.webp"
            width={200}
            height={200}
            alt="contact's mockup"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full max-w-[470px] flex flex-col gap-7"
          variants={fadeIn("right")}
        >
          <div className="w-full flex flex-col items-center xl:items-start">
            <div className="text-big">Let&rsquo;s have a chat.</div>
            <div className="flex items-center gap-1">
              <div className="text-primary">
                <AtSign size={18} />
              </div>
              <div className="text-sm lg:text-[18px] md:leading-[23px]">
                {"kosee.phot@gmail.com"}
              </div>
            </div>
          </div>
          <ContactForm />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Contact;
