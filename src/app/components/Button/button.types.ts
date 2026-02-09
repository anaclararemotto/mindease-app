import { Href } from "expo-router";

export type ButtonProps = {
    title: string;
    onPress?: () => void;
    href?: Href;
    disabled?: boolean;
}