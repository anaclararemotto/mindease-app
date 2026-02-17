import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const scheduleStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
    backgroundColor: colors.background,
    paddingHorizontal: 30,
    height: '100%'
  },
  });
