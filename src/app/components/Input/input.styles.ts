import { Colors } from '@/src/shared/theme/colors';
import { typography } from '@/src/shared/theme/typography';
import { Platform, StyleSheet } from 'react-native';

export const inputStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      gap: 5,
      width: '100%'
    },
    inputContainer: {
        backgroundColor: colors.backgroundSecondary,
      borderRadius: 16,
      paddingVertical: Platform.OS === 'ios' ? 12 : 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 30,
      
    },
    input: {
      ...typography.bodymd,
      flex: 1,
      paddingRight: 10,
      minHeight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });