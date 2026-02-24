import { Href } from "expo-router";
import { LucideIcon } from "lucide-react";

export type contentCardProps = {
  icon?: LucideIcon;
  href?: Href;
  title: string;
  subtitle: string;
};
