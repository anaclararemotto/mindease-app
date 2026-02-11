import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const loginStyles = (colors: Colors) =>
  StyleSheet.create({
    container:{
      backgroundColor: colors.background,
      height: "100%",
      width: "100%",
      paddingHorizontal: 30,
      paddingVertical: 90,
      gap: 50
    },
    containerTitle: {
gap: 10,
    },
    title: {
      color: colors.colorPrimary,
      ...typography.headingmd,
      textAlign: 'center'
    },
    subtitle: {
      color: colors.textColor,
      ...typography.headingxs,
      textAlign: 'center'
    },
    inputContainer: {
      width: "100%",
      gap: 10,
    },
    linkContainer: {
      gap: 10,
    },
    link:{
  color: colors.colorPrimary,
      ...typography.bodylg,
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
    text:{
      color: colors.textColor,
      ...typography.bodylg,
      textAlign: 'center'
    },
    
  });
