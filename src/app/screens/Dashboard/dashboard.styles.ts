import { Colors } from '@/src/shared/theme/colors';
import { typography } from '@/src/shared/theme/typography';
import { StyleSheet } from 'react-native';

export const dashboardStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      paddingHorizontal: 30,
      paddingVertical: 90,
      height: '100%',
      gap: 20,
      alignItems: 'center'
    },
    containerText: {
      gap: 5,
      width: '100%'
    },
    title: {
      ...typography.headingmd,
      color: colors.colorPrimary
    },
    subtitle: {
      ...typography.bodylg,
      color: colors.textColor
    },
    image: {
      width: "90%",
    },
    containerOptions: {
      width: "100%",
      gap: 20,
    },
  });