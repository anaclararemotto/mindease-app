import { Colors } from '@/src/shared/theme/colors';
import { StyleSheet } from 'react-native';

export const optionCardStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      paddingVertical: 12,
      paddingHorizontal: 20
    },
    content: {
      flexDirection: 'row',
      gap: 10,
    },
    text:{
        color: colors.textColor
    }
  });