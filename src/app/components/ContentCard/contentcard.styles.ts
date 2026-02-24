import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const contentCardStyles = (colors: Colors) =>
  StyleSheet.create({
    containerCard: {
      padding: 15,
      backgroundColor: colors.backgroundCard,
      borderRadius: 16,
    },
    title: {
      color: colors.brandAlternative,
      ...typography.headingxs,
    },
    subtitle: {
      color: colors.brandAlternative,
      ...typography.bodymd,
    },
  });
