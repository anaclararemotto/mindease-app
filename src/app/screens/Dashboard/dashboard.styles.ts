import { Colors } from '@/src/shared/theme/colors';
import { StyleSheet } from 'react-native';

export const dashboardStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 90
    },
  });