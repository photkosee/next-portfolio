"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

const ModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(theme === "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setChecked(!checked);
  };

  return (
    <div
      className="flex items-center gap-x-1 text-2xl font-bold"
      onClick={toggleTheme}
      role="button"
    >
      <span className="select-none">PH</span>
      <Switch checked={checked} />
      <span className="select-none">T</span>
    </div>
  );
};

export default ModeSwitch;
