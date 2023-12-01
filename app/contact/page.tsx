import { AtSign } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import AnimateBg from "@/components/AnimateBg";

const Contact = () => {
  return (
    <main className="min-h-screen pt-12">
      <div className="
        container mx-auto flex flex-col items-center justify-center
        lg:flex-row lg:justify-around h-full
        "
      >
        <div className="w-full max-w-[470px] flex flex-col gap-7">
          <div className="w-full flex flex-col items-center xl:items-start">
            <div className="text-big text-primary">
              Let&rsquo;s have a chat.
            </div>
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
        </div>
      </div>
    </main>
  );
};

export default Contact;
