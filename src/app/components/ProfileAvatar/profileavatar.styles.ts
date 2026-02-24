import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const profileAvatarStyles = (colors: Colors) =>
  StyleSheet.create({
    avatarContainer: {
      width: 82,
      height: 82,
      borderRadius: 82 / 2,
      borderWidth: 5,
      borderColor: colors.background,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background
    },
    avatar: {
      width: "100%",
      height: "100%",
    },
  });
