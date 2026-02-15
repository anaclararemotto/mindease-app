import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const calendarMonthStyles = (colors: Colors) =>
  StyleSheet.create({
    grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  day: {
    width: "14.2%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  });