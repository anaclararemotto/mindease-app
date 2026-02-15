import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const scheduleHeaderStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3D5AFE",
  },
  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  monthCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  monthText: {
    fontSize: 14,
    fontWeight: "500",
  },
  });