import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const scheduleHeaderStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
    gap: 10
  },
  topRow:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.colorPrimary,
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