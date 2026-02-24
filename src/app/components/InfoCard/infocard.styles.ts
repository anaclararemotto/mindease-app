import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { Rows } from "lucide-react";
import { StyleSheet } from "react-native";

export const infoCardStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      gap: 10,
      width: 90,
      justifyContent: "center",
      alignItems: "center",
    },
    info: {
      ...typography.bodylg,
      color: colors.textColor,
    },
    subtitle: {
      ...typography.bodysm,
      textAlign: "center",
      color: colors.placeholder,
      width: '100%'
    },
  });
