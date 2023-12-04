"use client";

import { useState } from "react";

import { Mail, MessageSquare, Send, User } from "lucide-react";

import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const templateForm = {
    from_name: name,
    from_email: email,
    message: message,
  };

  const validateInput = () => {
    const urlRegexs = [
      /(https?:\/\/[^\s]+)/gm,
      /(http?:\/\/[^\s]+)/gm,
    ];

    // Validating data to prevent web attacks (url injection)
    for (const urlRegex of urlRegexs) {
      if (urlRegex.test(name)) return false;
      if (urlRegex.test(email)) return false;
      if (urlRegex.test(message)) return false
    }

    return true;
  };

  const sendApi = () => {
    emailjs.send(
      "service_plhvm9r",
      "template_irwtfji",
      templateForm,
      "XX8h4A2h4Hb-8X1b-"
    )
      .then((response) => {
        toast({
          title: "Your message has been sent.",
          description:
            "I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      }, (error) => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: error.text,
        });
        setLoading(false);
      });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    if (!validateInput()) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "You are not allowed to embed a link in your message.",
      });
      setLoading(false);
      return
    } else {
      sendApi();
    }
  };

  return (
    <form className="flex flex-col gap-3 z-10" onSubmit={sendEmail}>
      <div>
        <Label htmlFor="name" className="ml-3 text-base">Name</Label>
        <div className="relative flex items-center">
          <Input className="
            pl-6 pr-14 h-[47px] rounded-full text-base
            "
            type="name"
            id="name"
            placeholder="What's your name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <User className="absolute right-7 text-primary" size={20} />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="ml-3 text-base">Email</Label>
        <div className="relative flex items-center">
          <Input className="
            pl-6 pr-14 h-[47px] rounded-full text-base
            "
            type="email"
            id="email"
            placeholder="What's your email?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Mail className="absolute right-7 text-primary" size={20} />
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="ml-3 text-base">Message</Label>
        <div className="relative flex items-center">
          <Textarea className="
            rounded-[27px] pl-6 pr-14 text-base min-h-[180px]
            "
            id="message"
            placeholder="What'd you like to say?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <MessageSquare className="
            absolute top-3 right-7 text-primary
            "
            size={20}
          />
        </div>
      </div>

      <Button className="
        gap-2 rounded-full max-w-[190px]
        "
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending a message" : "Leave a message"}
        <Send size={15} />
      </Button>
    </form>
  );
};

export default ContactForm;
