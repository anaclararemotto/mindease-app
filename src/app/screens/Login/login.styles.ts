import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const loginStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 30,
      paddingTop: 60,
      paddingBottom: 20,
    },
    containerContent: {
      justifyContent: "center",
      gap: 30,
    },
    containerTitle: {
      gap: 10,
      marginBottom: 10,
    },
    title: {
      color: colors.colorPrimary,
      ...typography.headingmd,
      textAlign: "center",
    },
    subtitle: {
      color: colors.textColor,
      ...typography.headingxs,
      textAlign: "center",
    },
    inputContainer: {
      width: "100%",
      gap: 15,
    },
    linkContainer: {
      gap: 15,
      marginTop: 10,
    },
    link: {
      color: colors.colorPrimary,
      ...typography.bodylg,
      textAlign: "center",
      textDecorationLine: "underline",
    },
    text: {
      color: colors.textColor,
      ...typography.bodylg,
      textAlign: "center",
    },
  });
