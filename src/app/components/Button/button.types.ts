import { Href } from "expo-router";
import { LucideIcon } from 'lucide-react';

export type ButtonProps = {
  title: string;
  onPress?: () => void;
  href?: Href;
  disabled?: boolean;
  iconClassName?: string;
  isLoading?: boolean;
  showIcon?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
};
