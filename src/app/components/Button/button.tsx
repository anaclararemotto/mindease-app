import { router } from "expo-router";
import { ButtonProps } from "./button.types";
import { Text, TouchableOpacity } from "react-native";

export const Button = ({title, onPress, href, disabled}: ButtonProps) => {

const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (href) {
      router.push(href);
    }
  };

  return(
    <TouchableOpacity onPress={handlePress}>
        <Text>{title}</Text>
    </TouchableOpacity>
  )

}