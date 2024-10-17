import { TbAlignJustified } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import Nav from "@/app/components/headers/Nav";
import Socials from "@/app/components/headers/Socials";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMobileNav } from "@/app/MobileNavContext";

const MobileNav = () => {
  const { isOpen, openMobileNav, closeMobileNav, toggleMobileNav } =
    useMobileNav();

  return (
    <Sheet open={isOpen} onOpenChange={toggleMobileNav}>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={openMobileNav}>
          <TbAlignJustified className="cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="
        p-0 m-0 h-full flex flex-col justify-around
        bg-[#fef5f5] dark:bg-transparent
        "
      >
        <Nav
          containerStyles="flex flex-col justify-center items-center gap-5"
          linkStyles="relative hover:text-primary transition-all"
          underlineStyles="
          absolute left-0 top-full h-[2px] bg-primary w-full rounded-lg
          "
        />

        <SheetFooter>
          <Socials
            containerStyles="w-full flex justify-center items-center gap-7"
            iconsStyles="text-[22px] hover:text-primary"
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
