import Socials from "@/app/components/headers/Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-9 lg:py-10 w-full">
      <div className="container flex justify-center">
        <Socials
          containerStyles="flex gap-x-7 mx-auto items-center"
          iconsStyles="
          dark:text-white/70 text-foreground text-white
          hover:text-primary dark:hover:text-primary text-[23px]
          "
        />
      </div>
    </footer>
  );
};

export default Footer;
