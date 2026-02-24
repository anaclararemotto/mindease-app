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
      gap: 40,
<<<<<<< HEAD
=======
      
>>>>>>> 651039214a40244316b0ee79b89671d03b277afc
    },
    brandContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    image: {
      width: "90%",
      height: 250,
      aspectRatio: 1,
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
    button:{
      width: '100%'
    }
  });
