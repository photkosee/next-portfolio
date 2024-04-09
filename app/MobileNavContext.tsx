"use client";

import { FC, ReactNode, createContext, useContext, useState } from "react";

interface MobileNavContextProps {
  isOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;
}

const MobileNavContext = createContext<MobileNavContextProps>({
  isOpen: true,
  openMobileNav: () => {},
  closeMobileNav: () => {},
  toggleMobileNav: () => {},
});

export const useMobileNav = () => {
  const context = useContext(MobileNavContext);
  if (!context) {
    throw new Error("useMobileNav must be used within a MobileNavProvider");
  }
  return context;
};

interface MobileNavProviderProps {
  children: ReactNode;
}

export const MobileNavProvider: FC<MobileNavProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMobileNav = () => {
    setIsOpen(true);
  };

  const closeMobileNav = () => {
    setIsOpen(false);
  };

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileNavContext.Provider
      value={{ isOpen, openMobileNav, closeMobileNav, toggleMobileNav }}
    >
      {children}
    </MobileNavContext.Provider>
  );
};
