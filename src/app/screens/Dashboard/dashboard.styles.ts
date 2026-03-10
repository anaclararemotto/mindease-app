import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const dashboardStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 30,
      paddingTop: 60,
      paddingBottom: 20,
      alignItems: "center",
      gap: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingBottom: 10,
    },
    containerText: {
      gap: 5,
      flex: 1,
    },
    title: {
      ...typography.headingmd,
      color: colors.colorPrimary,
    },
    subtitle: {
      ...typography.bodylg,
      color: colors.textColor,
    },
    logoutButton: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "90%",
      height: 250,
      aspectRatio: 1,
    },
    containerOptions: {
      width: "100%",
      gap: 20,
      marginTop: 10,
    },
  });
