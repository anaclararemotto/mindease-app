import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const CalendarGridStyles = (colors: Colors) =>
  StyleSheet.create({
   grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dayWrapper: {
    width: "14.2%",
  },

  dayContainer: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 0.5,
    borderColor: "#eee",
  },

  expandedDay: {
    backgroundColor: "#F5F7FF",
  },

  dayText: {
    fontSize: 14,
  },

  dot: {
    marginTop: 4,
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#3D5AFE",
  },

  eventContainer: {
    padding: 6,
    backgroundColor: "#FAFAFA",
  },

  eventCard: {
    backgroundColor: "#3D5AFE15",
    borderRadius: 8,
    padding: 6,
    marginBottom: 4,
  },

  eventHour: {
    fontSize: 11,
    fontWeight: "600",
  },

  eventTitle: {
    fontSize: 12,
  },

  eventSubject: {
    fontSize: 10,
    color: "#666",
  },

  emptyContainer: {
    padding: 6,
  },

  emptyText: {
    fontSize: 11,
    color: "#999",
  },
  });