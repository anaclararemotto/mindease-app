import { Colors } from "@/src/shared/theme/colors";
import { typography } from "@/src/shared/theme/typography";
import { StyleSheet } from "react-native";

export const buttonStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.colorPrimary,
      paddingHorizontal: 12,
      paddingVertical: 10,
      justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
         flex: 1,
        
    },
    text: {
        ...typography.button,
        color: colors.white
    },
    disabled:{
        opacity: 0.6,
    },

content: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8, 
    },
    iconLeft: { marginRight: 8 },
    iconRight: { marginLeft: 8 },

    
  });
