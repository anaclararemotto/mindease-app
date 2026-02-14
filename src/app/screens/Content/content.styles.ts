import { Colors } from '@/src/shared/theme/colors';
import { StyleSheet } from 'react-native';

export const contentStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      paddingHorizontal: 30,
      paddingVertical: 90,
      height: '100%',
      gap: 20,
      alignItems: 'center'
    },
  });