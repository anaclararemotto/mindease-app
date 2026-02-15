import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const weekDaysRowStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  day: {
    width: "14.2%",
    textAlign: "center",
    fontSize: 12,
    color: "#888",
  },
  });