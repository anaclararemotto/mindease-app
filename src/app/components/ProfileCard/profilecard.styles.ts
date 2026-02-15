import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const profileCardStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.colorSecondary,
      padding: 20,
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      borderRadius: 16,
    },
    name: {
      ...typography.headingsm,
      color: colors.brandAlternative,
    },
    mail: {
      ...typography.bodymd,
      color: colors.brandAlternative,
    },
    link: {
      ...typography.bodylg,
      color: colors.colorPrimary,
      textDecorationLine: "underline",
    },
  });
