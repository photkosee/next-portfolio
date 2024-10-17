import { ReactComponentElement } from "react";

export interface Project {
  image?: string;
  category: string;
  name: string;
  description: string;
  link?: string;
  github: string;
  stack: ReactComponentElement[];
  uml?: string;
  date: string;
  show?: boolean;
}
