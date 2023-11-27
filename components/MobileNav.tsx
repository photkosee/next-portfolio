import { TbAlignJustified } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger
} from "@/components/ui/sheet";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <TbAlignJustified />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-around">
        <Nav
          containerStyles="flex flex-col justify-center items-center gap-5"
          linkStyles="relative hover:text-primary transition-all"
          underlineStyles="
          absolute left-0 top-full h-[2px] bg-primary w-full rounded-lg
          "
        />

        <SheetFooter>
          <Socials
            containerStyles="w-full flex justify-center items-center gap-5"
            iconsStyles="text-[22px] hover:text-primary"
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
