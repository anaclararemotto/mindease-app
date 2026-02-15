import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const calendarCompactStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  day: {
    alignItems: "center",
  },
  number: {
    fontSize: 16,
    fontWeight: "600",
  },
  });