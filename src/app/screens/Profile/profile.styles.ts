import { Colors } from "@/src/shared/theme/colors";
import { StyleSheet } from "react-native";

export const profileStyles = (colors: Colors) =>
  StyleSheet.create({
    container:{
      backgroundColor: colors.background,
      height: "100%",
      width: "100%",
      paddingHorizontal: 30,
      paddingVertical: 90,
      gap: 20
    },
    inline: {
      gap: 10,
      flexDirection : 'row',
      justifyContent: 'center'
    }
  });
