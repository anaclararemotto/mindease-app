import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const landingStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
      height: "100%",
      paddingHorizontal: 30,
      gap: 40
    },
    brandContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    image: {
      width: "90%",
    },
    brand: {
      ...typography.headingxxl,
      color: colors.colorPrimary,
    },
    containerContent: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      gap: 10,
    },
    slogan: {
      ...typography.bodylg,
      textAlign: "center",
    },
    wellcome: {
      ...typography.bodylg,
      textAlign: "center",
      fontWeight: 600,
    },
  });
